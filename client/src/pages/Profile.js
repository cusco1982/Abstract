import React, { Component } from "react";
import { Link } from "react-router-dom";


class Profile extends Component {
    render() {
        return (
            <div>

                <h1>profile page</h1>

            
                    <Link className="main-link" to="/">Main</Link>
            

            </div>


        );
    }
}

export default Profile;