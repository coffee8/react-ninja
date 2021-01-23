import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../commons/FormsControl/FormsControl";
import {required} from "../../utils/validators/validators";

const Login = (props) => {
    return (
        <div>
            <h1>PLEASE SIGN IN</h1>
            <LoginReduxForm/>
        </div>
    );
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'}
                       name={'login'}
                       validate={[required]}
                       component={Input}
                       element={'input'}
                />
            </div>
            <div>
                <Field placeholder={'Password'}
                       name={'password'}
                       validate={[required]}
                       component={Input}
                       element={'input'}/>

            </div>
            <div>
                <Field type={'checkbox'}
                       validate={[required]}
                       component={Input}
                       element={'input'}
                /> remember me
            </div>
            <div>
                <button>login</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default Login;