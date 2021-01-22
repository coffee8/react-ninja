import React from 'react';
import {Field, reduxForm} from "redux-form";

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
                <Field placeholder={'Login'} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'}/>
            </div>
            <div>
                <Field type={'checkbox'} component={'input'}/> remember me
            </div>
            <div>
                <button>login</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default Login;