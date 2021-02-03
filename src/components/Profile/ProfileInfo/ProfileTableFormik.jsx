import {Formik, useField, Form, Field} from 'formik';
import * as Yup from 'yup';

const MyTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <div>
                <b><label htmlFor={props.id || props.name}>
                    {label}
                </label></b>
            </div>
            <input className={'text-input'}{...field} {...props}/>
            {meta.touched && meta.error
                ? (<div className={'error'}>{meta.error}</div>)
                : null}
        </div>
    );
};

const ProfileTableFormik = (props) => {
    return (
        <div>
            <Formik
                initialValues={{
                    lookingForAJobDescription: props.profile.lookingForAJobDescription,
                    lookingForAJob: props.profile.lookingForAJob,
                    fullName: props.profile.fullName,
                    userId: props.profile.userId,
                    facebook: props.profile.contacts.facebook,
                    website: props.profile.contacts.website,
                    twitter: props.profile.contacts.twitter,
                    github: props.profile.contacts.github,
                }}

                validationSchema={Yup.object({
                    fullName: Yup.string().min(3, 'Must be 3 characters or more'),
                    facebook: Yup.string().url(),
                    website: Yup.string().url(),
                    twitter: Yup.string().url(),
                    github: Yup.string().url(),
                })}

                onSubmit={(values, {setSubmitting}) => {
                    props.handleSubmit(values)
                }}
            >
                <Form>
                    <MyTextInput
                        label={'Full name:'}
                        name={'fullName'}
                        type={'text'}
                        placeholder={'Write your name :)'}
                    />
                    <MyTextInput
                        label={'Looking for a job description:'}
                        name={'lookingForAJobDescription'}
                        type={'text'}
                        placeholder={'Description'}
                    />

                    <b><label htmlFor="lookingForAJob">Looking for a job:</label></b>
                    <Field name="lookingForAJob" type="checkbox"/>

                    <MyTextInput
                        label={'Facebook:'}
                        name={'facebook'}
                        type={'text'}
                        placeholder={'facebook link'}
                    />
                    <MyTextInput
                        label={'website:'}
                        name={'website'}
                        type={'text'}
                        placeholder={'your website'}
                    />
                    <MyTextInput
                        label={'Twitter:'}
                        name={'twitter'}
                        type={'text'}
                        placeholder={'twitter link'}
                    />
                    <MyTextInput
                        label={'GitHub:'}
                        name={'github'}
                        type={'text'}
                        placeholder={'github link'}
                    />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>

        </div>
    );
};

export default ProfileTableFormik;