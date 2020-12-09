import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.margin}>
                <img src='https://www.pics4learning.com/images/pics-banner1-1300.jpg'></img>
            </div>
            <div className={s.margin}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo