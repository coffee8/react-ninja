import Contact from "./Contact";

const ProfileTable = ({profile}) => {
    return (
        <div>
            <div>
                <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
            </div>

            <div>
                {profile.lookingForAJob &&
                <div><b>Description: </b>{profile.lookingForAJobDescription}</div>}
            </div>

            <div>
                <b>Contacts:</b>
                {Object
                    .keys(profile.contacts)
                    .map(key => {
                            return <Contact key={key} contactTitle={key}
                                            contactValue={profile.contacts[key]}/>
                        }
                    )}
            </div>
        </div>
    )
};

export default ProfileTable;