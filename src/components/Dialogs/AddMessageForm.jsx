import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../utils/validators/validators";
import {Input} from "../../commons/FormsControl/FormsControl";

const maxLength15 = maxLength(150)

const AddMessageForm = (props) => {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Enter your message'}
                           name={'newMessageBody'}
                           validate={[required, maxLength15]}
                            component={Input}
                           element={'input'}
                    />

                </div>
                <div>
                    <button>Send message</button>
                </div>
            </form>
        </div>
    );
}

const AddMessageReduxForm = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default AddMessageReduxForm;