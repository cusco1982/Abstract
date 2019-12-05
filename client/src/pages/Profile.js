import React, { Component } from "react";
import { Link } from "react-router-dom";


class Profile extends Component {
    render() {
        return (
            <div>

                <h1>profile page</h1>

                <p>
                    No Account? <Link className="main-link" to="/">Main</Link>
                </p>

            </div>


        );
    }
}

export default Profile;