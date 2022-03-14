import React, {useRef, useState} from 'react';
import {Form, Card, Button, Alert} from "react-bootstrap";
// import {useAuth} from "../../../senior-projekt/frontend/src/contexts/AuthContext"
import {useAuth} from "../contexts/AuthContext"
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";
// import {auth} from "../../../senior-projekt/frontend/src/firebase";
import {auth} from "../firebase"
import {Link, useHistory} from "react-router-dom";

const Signup = () => {

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

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

    const register = async (e) => {
        e.preventDefault();

        if (registerPassword !== registerConfirmPassword) {
            return setError('Passwords do not match');
        }

        try {
            setError('');
            setLoading(true);
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            history.push("/");
            console.log(user);
        } catch (error) {
            setError('Failed to create an account')
            console.log(error.message);
        }
        setLoading(false);
    };

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className={"text-center mb-4"}>Sign Up</h2>
                    {error && <Alert variant={"danger"}>{error}</Alert>}

                    <Form.Group id={"email"}>
                        <Form.Label>Email</Form.Label>
                        {/*<Form.Control type={"email"} ref={emailRef} required/>*/}
                        <Form.Control type={"email"} onChange={(event) => setRegisterEmail(event.target.value)}
                                      required/>
                    </Form.Group>
                    <Form.Group id={"password"}>
                        <Form.Label>Password</Form.Label>
                        {/*<Form.Control type={"password"} ref={passwordRef} required/>*/}
                        <Form.Control type={"password"}
                                      onChange={(event) => setRegisterPassword(event.target.value)} required/>
                    </Form.Group>
                    <Form.Group id={"password-confirm"}>
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type={"password"}
                                      onChange={(event) => setRegisterConfirmPassword(event.target.value)}
                                      required/>
                    </Form.Group>
                    <Button onClick={register} disabled={loading} className={"w-100 mt-3"}>Sign Up</Button>

                </Card.Body>
            </Card>
            <div className={"w-100 text-center mt-2"}>
                Already have an account? <Link to={"/login"}>Log In</Link>
            </div>

        </>
    );
};

export default Signup;