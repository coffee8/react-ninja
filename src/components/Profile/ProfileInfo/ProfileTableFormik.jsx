import {useFormik} from 'formik';

const ProfileTableFormik = (props) => {

    const formik = useFormik({
        initialValues: {
            lookingForAJobDescription: props.profile.lookingForAJobDescription,
            lookingForAJob: props.profile.lookingForAJob,
            fullName: props.profile.fullName,
            userId: props.profile.userId,
            facebook: props.profile.contacts.facebook,
            website: props.profile.contacts.website,
            vk: props.profile.contacts.vk,
            twitter: props.profile.contacts.twitter,
            instagram: props.profile.contacts.instagram,
            youtube: props.profile.contacts.youtube,
            github: props.profile.contacts.github,
            mainLink: props.profile.contacts.mainLink
            // facebook: '',
            // website: '',
            // vk: '',
            // twitter: '',
            // instagram: '',
            // youtube: '',
            // github: '',
            // mainLink: ''

        },
        onSubmit: values => {
            props.handleSubmit(values)
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="lookingForAJobDescription">
                <div>Looking for a job description:</div>
            </label>
            <input
                placeholder={'Looking for a job description'}
                id={'lookingForAJobDescription'}
                name={'lookingForAJobDescription'}
                type={'text'}
                onChange={formik.handleChange}
                value={formik.values.lookingForAJobDescription}
            />
            <label htmlFor="lookingForAJob">
                <div>Looking for a job:</div>
            </label>
            <input
                id={'lookingForAJob'}
                name={'lookingForAJob'}
                type={'checkbox'}
                onChange={formik.handleChange}
                value={formik.values.lookingForAJob}
            />
            <div>Contacts:</div>
            <div>
                <label htmlFor="facebook"></label>
                <input
                    placeholder={'facebook'}
                    id={'facebook'}
                    name={'facebook'}
                    type={'link'}
                    onChange={formik.handleChange}
                    value={formik.values.facebook}
                />
            </div>
            <div>
                <label htmlFor="website"></label>
                <input
                    placeholder={'website'}
                    id={'website'}
                    name={'website'}
                    type={'link'}
                    onChange={formik.handleChange}
                    value={formik.values.website}
                />
            </div>
            <div>
                <label htmlFor="vk"></label>
                <input
                    placeholder={'vk'}
                    id={'vk'}
                    name={'vk'}
                    type={'link'}
                    onChange={formik.handleChange}
                    value={formik.values.vk}
                />
            </div>
            <div>
                <label htmlFor="twitter"></label>
                <input
                    placeholder={'twitter'}
                    id={'twitter'}
                    name={'twitter'}
                    type={'link'}
                    onChange={formik.handleChange}
                    value={formik.values.twitter}
                />
            </div>
            <div>
                <label htmlFor="instagram"></label>
                <input
                    placeholder={'instagram'}
                    id={'instagram'}
                    name={'instagram'}
                    type={'link'}
                    onChange={formik.handleChange}
                    value={formik.values.instagram}
                />
            </div>
            <div>
                <label htmlFor="youtube"></label>
                <input
                    placeholder={'youtube'}
                    id={'youtube'}
                    name={'youtube'}
                    type={'link'}
                    onChange={formik.handleChange}
                    value={formik.values.youtube}
                />
            </div>
            <div>
                <label htmlFor="github"></label>
                <input
                    placeholder={'github'}
                    id={'github'}
                    name={'github'}
                    type={'link'}
                    onChange={formik.handleChange}
                    value={formik.values.github}
                />
            </div>
            <div>
                <label htmlFor="mainLink"></label>
                <input
                    placeholder={'mainLink'}
                    id={'mainLink'}
                    name={'mainLink'}
                    type={'link'}
                    onChange={formik.handleChange}
                    value={formik.values.mainLink}
                />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default ProfileTableFormik;