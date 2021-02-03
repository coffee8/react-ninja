import Contact from "./Contact";

const ProfileTable = ({profile, isOwner, activateEditMode}) => {
    const contacts = {
        facebook: profile.contacts.facebook,
        website: profile.contacts.website,
        twitter: profile.contacts.twitter,
        github: profile.contacts.github,
    }
    return (
        <div>
            {isOwner && <div>
                <button onClick={activateEditMode}> Edit</button>
            </div>}
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
                    .keys(contacts)
                    .map(key => {
                            return <Contact key={key} contactTitle={key}
                                            contactValue={contacts[key]}/>
                        }
                    )}
            </div>
        </div>
    )
};

export default ProfileTable;