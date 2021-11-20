import {useDispatch, useSelector} from "react-redux";
import {submitLogin} from "./actions";
import saga from "./saga";
import {useInjectSaga} from "../../utils/injectSaga";
import {useNavigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {makeSelectorErrors} from "../../store/selectors/globalSelectors";
import {
    CssBaseline,
    Grid,
    Paper,
    Box,
    Avatar,
    Typography,
} from "@mui/material";
import logo from '../../assets/images/logo.png';
import {LockOutlined} from "@mui/icons-material";
import LoginForm from "./forms/LoginForm";
import {LoginFormJsonI} from "./forms/LoginFormJsonI";
import Image from "../../components/Image";

const LoginPage = () => {
    useAuth()
    useInjectSaga({key: 'login', saga})
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const errors = useSelector(makeSelectorErrors());

    const handleSubmitForm = ({formData}: LoginFormJsonI, e: any) => {
        e.preventDefault();
        dispatch(submitLogin(formData.identifier, formData.password, navigate))
    }

    return(
        <div>
            {errors && <div>{errors}</div>}

            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        pt: 8
                    }}
                >
                    <Image source={logo} width={250} alt="logo" />
                    <Typography component="h1" variant="h3" sx={{fontWeight: 'bold', textAlign: 'center'}}>
                        Mentorat - Facturation
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlined />
                        </Avatar>
                        <Grid
                            item
                        >
                            <Typography component="h2" variant="h4" sx={{fontWeight: 'bold', textTransform: "uppercase", textAlign: 'center', mt: 4}}>
                                Connexion
                            </Typography>
                            <LoginForm handleSubmitForm={handleSubmitForm} />
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default LoginPage;
