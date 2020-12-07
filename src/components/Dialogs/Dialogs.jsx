import s from './Dialogs.module.css'

const Dialogs = () => {
    return (

        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <div className={s.dialog}>
                    Dima
                </div>
                <div className={s.dialog}>
                    Super
                </div>
                <div className={s.dialog}>
                    Ninja
                </div>
            </div>

            <div className={s.messages}>
                <div className={s.dialog}>
                    hi
                </div>
                <div className={s.dialog}>
                    wassup
                </div>
                <div className={s.dialog}>
                    wag1
                </div>
            </div>
        </div>

    )
}

export default Dialogs

