import React, {useRef, useState} from 'react';
import {Form, Card, Button, Alert} from "react-bootstrap";
// import {useAuth} from "../../../senior-projekt/frontend/src/contexts/AuthContext"
import {useAuth} from "../contexts/AuthContext"
import {updatePassword, updateEmail, getAuth, onAuthStateChanged,} from "firebase/auth";
// import {auth} from "../../../senior-projekt/frontend/src/firebase";
import {auth} from "../firebase"
import {Link, useHistory} from "react-router-dom";

const UpdateProfile = () => {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    // const {currentUser} = getAuth();
    // const {updatePassword, updateEmail} = useAuth();
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");

    const [user, setUser] = useState({});

    const history = useHistory();

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    // async function handleSubmit(e) {
    //     e.preventDefault();
    //
    //     if (registerPassword !== registerConfirmPassword) {
    //         return setError('Passwords do not match');
    //     }
    //
    //     try {
    //         setError('')
    //         setLoading(true);
    //         await signup(registerEmail, registerPassword)
    //     } catch {
    //         setError('Failed to create an account')
    //     }
    //     setLoading(false)
    // }

    const register = (e) => {
        e.preventDefault();

        if (registerPassword !== registerConfirmPassword) {
            return setError('Passwords do not match');
        }

        const promises = []
        setLoading(true);
        setError('');
        if (registerEmail !== auth.currentUser.email) {
            promises.push(auth.currentUser.updateEmail(registerEmail));
        }
        if (registerPassword) {
            promises.push(auth.currentUser.updatePassword(registerPassword));
        }

        Promise.all(promises).then(() => {
            history.push('/');
        }).catch(() => {
            setError("Failed to update account");
        }).finally(() => {
            setLoading(false);
        })
    };

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className={"text-center mb-4"}>Update Profile</h2>
                    {error && <Alert variant={"danger"}>{error}</Alert>}

                    <Form.Group id={"email"}>
                        <Form.Label>Email</Form.Label>
                        {/*<Form.Control type={"email"} ref={emailRef} required/>*/}
                        <Form.Control type={"email"} onChange={(event) => setRegisterEmail(event.target.value)}
                                      required defaultValue={auth.currentUser.email}/>
                    </Form.Group>
                    <Form.Group id={"password"}>
                        <Form.Label>Password</Form.Label>
                        {/*<Form.Control type={"password"} ref={passwordRef} required/>*/}
                        <Form.Control type={"password"}
                                      onChange={(event) => setRegisterPassword(event.target.value)}
                                      placeholder={"Leave blank to keep the same"}/>
                    </Form.Group>
                    <Form.Group id={"password-confirm"}>
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type={"password"}
                                      onChange={(event) => setRegisterConfirmPassword(event.target.value)}
                                      placeholder={"Leave blank to keep the same"}/>
                    </Form.Group>
                    <Button onClick={register} disabled={loading} className={"w-100 mt-3"}>Update</Button>

                </Card.Body>
            </Card>
            <div className={"w-100 text-center mt-2"}>
                <Link to={"/"}>Cancel</Link>
            </div>

        </>
    );
};

export default UpdateProfile;