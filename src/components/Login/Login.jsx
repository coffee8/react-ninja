import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../commons/FormsControl/FormsControl";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import style from "../../commons/FormsControl/FormsControl.module.css"

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>PLEASE SIGN IN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Email'}
                       name={'email'}
                       validate={[required]}
                       component={Input}
                       element={'input'}
                />
            </div>
            <div>
                <Field placeholder={'Password'}
                       name={'password'}
                       type={'password'}
                       validate={[required]}
                       component={Input}
                       element={'input'}/>

            </div>
            <div> {
                error && <div className={style.formAuthError}> {error} </div>
            }
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

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default  connect(mapStateToProps, {login})(Login);