import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validators/validators";
import {Textarea} from "../../../commons/FormsControl/FormsControl";

const maxLength15 = maxLength(15)

const AddPostForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Enter message'}
                           name={'newPostText'}
                           validate={[required, maxLength15]}
                           component={Textarea}
                           element={'textarea'}
                    />
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