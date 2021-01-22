import {Field, reduxForm} from "redux-form";

const AddMessageForm = (props) => {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Enter your message'} name={'newMessageBody'} component={'textarea'}/>
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