import p from './Profile.module.css'

const Profile = () => {
    return (
        <div className={p.content}>
            <div>
                <img src='https://www.pics4learning.com/images/pics-banner1-1300.jpg'></img>
            </div>
            <div>
                ava + description
        </div>
            <div>
                my posts
          <div>
                    new post
          </div>
                <div>
                    <div className={p.item}>
                        post 1
            </div>
                    <div className={p.item}>
                        post 2
            </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;