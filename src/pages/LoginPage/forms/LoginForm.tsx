import {JSONSchema7} from "json-schema";
import {Button, Grid} from "@mui/material";
import Form from "@rjsf/material-ui";
import {LoginFormJsonI} from "./LoginFormJsonI";

export interface LoginFormPropsI {
    handleSubmitForm: (formData: LoginFormJsonI, event: any) => any,
    isFormValid: boolean
}

const schema: JSONSchema7 = {
    type: 'object',
    properties: {
        identifier: {
            type: 'string',
            format: 'email'
        },
        password: {
            type: 'string'
        }
    },
    required: ['identifier', 'password']
}

const uiSchema = {
    password: {
        "ui:widget": "password"
    }
}

const LoginForm = (props: any) => {
    return (
        <Form
            idPrefix="login-form"
            schema={schema}
            uiSchema={uiSchema}
            onSubmit={props.handleSubmitForm}
            liveValidate={false}
            showErrorList={false}
        >
            <Grid
                item
                sx={{display: 'flex', justifyContent: 'flex-end'}}
            >
                <Button sx={{bgcolor: 'primary.main', color: 'primary.contrastText', mt: 2}} type="submit">Me connecter</Button>
            </Grid>
        </Form>
    )
}

export default LoginForm;
