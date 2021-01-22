import {Field, reduxForm} from "redux-form";

const AddPostForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Enter message'} name={'newPostText'} component={'input'}/>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </form>
        </div>
    );
}

const AddPostReduxForm = reduxForm({form: 'profileAddNewPostForm'})(AddPostForm)

export default AddPostReduxForm;