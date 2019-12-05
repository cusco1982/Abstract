import React, { Component } from "react";
import { Link } from "react-router-dom";


class Main extends Component {
    render() {
        return (
            <div>

                <h1>main page</h1>


                <p>
                    No Account? <Link className="profile-link" to="/profile">Profile</Link>
                </p>

            </div>

        );
    }
}

export default Main;