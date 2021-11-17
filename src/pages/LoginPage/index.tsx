import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {submitLogin} from "./actions";
import saga from "./saga";
import {useInjectSaga} from "../../utils/injectSaga";
import {useNavigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {makeSelectLoading, makeSelectorErrors} from "../../store/selectors/globalSelectors";

const LoginPage = () => {
    useAuth()
    useInjectSaga({key: 'login', saga})
    const dispatch = useDispatch();
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const loading = useSelector(makeSelectLoading());
    const errors = useSelector(makeSelectorErrors());

    const handleSubmitForm = (e: any) => {
        e.preventDefault();
        dispatch(submitLogin(identifier, password, navigate))
    }

    return(
        <div>
            {loading && <div>Chargement en cours</div>}
            {errors && <div>{errors}</div>}

            <form onSubmit={handleSubmitForm}>
                <input type="text" onChange={e => setIdentifier(e.target.value)} />
                <input type="text" onChange={e => setPassword(e.target.value)} />
                <button type="submit">Me connecter</button>
            </form>
        </div>
    )
}

export default LoginPage;
