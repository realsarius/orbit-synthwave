import React, {useState} from 'react';
import {Alert, Button, Card} from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";
import {getAuth, signOut} from "firebase/auth";
// import {auth} from "../../../senior-projekt/frontend/src/firebase";
import {auth} from "../firebase"

const Dashboard = () => {

    const [error, setError] = useState("");
    const {currentUser} = getAuth();
    const history = useHistory();

    const logout = async () => {
        setError("");
        try {
            await signOut(auth);
            history.push("/");
        } catch {
            setError("Failed to log out");
        }

    };

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className={"text-center mb-4"}>Profile</h2>
                    {error && <Alert variant={"danger"}>{error}</Alert>}
                    <strong>Email: </strong> {currentUser.email}
                    <Link to={"/update-profile"} className={"btn btn-primary w-100 mt-3"}>Update Profile</Link>
                </Card.Body>
            </Card>
            <div className={"w-100 text-center mt-2"}>
                <Button variant={"link"} onClick={logout}>Log Out</Button>
            </div>
        </>
    );
};

export default Dashboard;