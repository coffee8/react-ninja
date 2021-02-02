/*
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../../commons/FormsControl/FormsControl";
import React from "react";

const ProfileTableForm = ({profile, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={'Full name'}
                       name={'fullName'}
                       validate={[]}
                       component={Input}
                       element={'input'}/>
            </div>
            <div> Looking for a job
                <Field placeholder={'Looking for a job'}
                       name={'lookingForAJob'}
                       validate={[]}
                       component={Input}
                       element={'input'}
                       type={'checkbox'}
                />
            </div>
            <div>
                <Field placeholder={'Professional skills'}
                       name={'lookingForAJobDescription'}
                       validate={[]}
                       component={Textarea}
                       element={'textarea'}
                />
            </div>
            <div>
                <Field placeholder={'Facebook'}
                       name={'facebook'}
                       validate={[]}
                       component={Input}
                       element={'input'}
                />
            </div>
            <div>
                <Field placeholder={'website'}
                       name={'website'}
                       validate={[]}
                       component={Input}
                       element={'input'}
                />
            </div>
            <div>
                <Field placeholder={'vk'}
                       name={'vk'}
                       validate={[]}
                       component={Input}
                       element={'input'}
                />
            </div>
            <div>
                <Field placeholder={'twitter'}
                       name={'twitter'}
                       validate={[]}
                       component={Input}
                       element={'input'}
                />
            </div>
            <div>
                <Field placeholder={'instagram'}
                       name={'instagram'}
                       validate={[]}
                       component={Input}
                       element={'input'}
                />
            </div>
            <div>
                <Field placeholder={'youtube'}
                       name={'youtube'}
                       validate={[]}
                       component={Input}
                       element={'input'}
                />
            </div>

            <div>
                <Field placeholder={'github'}
                       name={'github'}
                       validate={[]}
                       component={Input}
                       element={'input'}
                />
            </div>
            <div>
                <Field placeholder={'mainLink'}
                       name={'mainLink'}
                       validate={[]}
                       component={Input}
                       element={'input'}
                />
            </div>
            <div><button>Save</button></div>
        </form>
    );
}

const ProfileTableReduxForm = reduxForm({form: 'profileForm'})(ProfileTableForm)

export default ProfileTableReduxForm;
*/
