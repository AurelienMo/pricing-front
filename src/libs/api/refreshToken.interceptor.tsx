import { AxiosError} from "axios";

import { PricingApi} from "./PricingApi";
import {
    userFailedLoggedWithRefreshToken,
    userLoggedWithRefreshToken,
    userTryToLoginWithRefreshToken
} from "../../store/actions/globalActions";
import {store} from "../../store/store";
import {GET_PROJECTS, GET_TARIFICATION_LEVELS, ME_INFORMATIONS} from "./endpoints";
import CfgTarification from "../../models/CfgTarification";
import CfgCategoryCourse from "../../models/CfgCategoryCourse";
import {
    onGetCoursesCfgSuccess,
    onGetMeInformationsSuccess,
    onGetTarificationsCfgSuccess
} from "../../pages/LoginPage/actions";
import MeModel from "../../models/MeModel";

let subscribers: any = [];

export async function refreshTokenInterceptorError(error: AxiosError) {
    if (error.response && error.response.status === 401) {
        console.log(error.response.data.message);
        if(error.response.data.message === 'An authentication exception occurred.') {
            store.store.dispatch(userFailedLoggedWithRefreshToken());

            return Promise.reject(error);
        }
        try {
            const currentRefreshToken = store.store.getState().user.auth.refresh_token;
            const retryOriginalRequest = new Promise(resolve => {
                addSubscriber((accessToken: string) => {
                    // @ts-ignore
                    error.config.headers.Authorization = `Bearer ${accessToken}`
                });
            });
            store.store.dispatch(userTryToLoginWithRefreshToken());
            const response = await PricingApi.refreshAccessToken(
                currentRefreshToken || ""
            );
            const accessToken = response.data.token;
            const refreshToken = response.data.refresh_token;
            const tarifications = await PricingApi.get(
                {
                    url: GET_TARIFICATION_LEVELS,
                    model: CfgTarification,
                    config: {
                        headers: {
                            Authorization: accessToken
                        }
                    }
                }
            )
            const courses = await PricingApi.get({
                url: GET_PROJECTS,
                model: CfgCategoryCourse,
                config: {
                    headers: {
                        Authorization: accessToken
                    }
                }
            })
            const me = await PricingApi.get({
                url: ME_INFORMATIONS,
                model: MeModel,
                config: {
                    headers: {
                        Authorization: accessToken
                    }
                }
            })
            store.store.dispatch(userLoggedWithRefreshToken(accessToken, refreshToken));
            store.store.dispatch(onGetTarificationsCfgSuccess(tarifications.data));
            store.store.dispatch(onGetCoursesCfgSuccess(courses.data));
            store.store.dispatch(onGetMeInformationsSuccess(me.data));

            onAccessTokenFetched(accessToken);

            return retryOriginalRequest;
        } catch (e) {
            store.store.dispatch(userFailedLoggedWithRefreshToken());

            return Promise.reject(error);
        }
    }

    return Promise.reject(error);
}

function onAccessTokenFetched(accessToken: string) {
    subscribers.forEach((callback: any) => callback(accessToken));
    subscribers = [];
}

function addSubscriber(callback: (accessToken: string) => void) {
    subscribers.push(callback);
}
