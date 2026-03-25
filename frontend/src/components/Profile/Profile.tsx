import * as React from 'react'
import Button from '../Button/Button'

interface ProfileProps {
    name: string
    loggedIn?: boolean 
}

function Profile({name, loggedIn = false}: ProfileProps) {
    if (loggedIn) {
        return (
            <React.Fragment>
                <div className="profile">
                    <div className="profile-name">{name}</div>
                    <div className="profile-icon"></div>
                </div>
            </React.Fragment>
        )
    }
    
    return  (
        <React.Fragment>
            <Button text="Sign in" type="primary" onClick={() => {}}></Button>
        </React.Fragment>
    )
}

export default Profile;
