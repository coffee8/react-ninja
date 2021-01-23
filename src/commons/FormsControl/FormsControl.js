import React from "react";
import styles from "./FormsControl.module.css";

const FormsControl = ({input, meta, element, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {React.createElement(element, {...input, ...props})}
            </div>
            {hasError && <span> {meta.error} </span>}
        </div>
    );
}

export const Textarea = (props) => {
       return <FormsControl {...props}/>
}

export const Input = (props) => {
       return <FormsControl {...props}/>
}
