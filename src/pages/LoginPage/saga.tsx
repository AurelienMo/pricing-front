import {takeEvery, call, put} from 'redux-saga/effects';
import {SUBMIT_LOGIN} from "../../store/constants/globalConstants";
import {GET_TARIFICATION_LEVELS, GET_TOKEN} from "../../libs/api/endpoints";
import {ModelAuthActionI, onGetTarificationsCfgSuccess, onLoginError, onLoginSuccess} from "./actions";
import {PricingApi} from "../../libs/api/PricingApi";
import {DASHBOARD_PATH} from "../../navigations/routes/protectedRoutes";
import CfgTarification from "../../models/CfgTarification";

export default function* userSaga() {
    yield takeEvery(SUBMIT_LOGIN, getUserWhenLogin)
}

export function* getUserWhenLogin(action: ModelAuthActionI) {
    const options = {
        url: GET_TOKEN,
        data: {
            username: action.identifier,
            password: action.password
        },
        addAuthHeader: false
    };
    try {
        const {data} = yield call(PricingApi.post, options);
        yield put(onLoginSuccess(data));
        yield getTarificationsCfg(data.token);
        action.navigate(DASHBOARD_PATH)
    } catch (err) {
        yield put(onLoginError(err))
    }
}

export function* getTarificationsCfg(token: string) {
    const options = {
        url: GET_TARIFICATION_LEVELS,
        model: CfgTarification,
        config: {
            headers: {
                Authorization: token
            }
        }
    };

    try {
        // @ts-ignore
        const {data} = yield call(PricingApi.get, options);
        yield put(onGetTarificationsCfgSuccess(data));
    } catch (err) {
        console.log(err);
        yield put(onLoginError('Une erreur a été rencontré lors de la synchronisation des informations'))
    }
}