import React, { useState } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const Signup = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
    const { signup } = useAuth();

    const history = useHistory();

    const register = async (e) => {
        e.preventDefault();

        if (registerPassword !== registerConfirmPassword) {
            return setError("Passwords do not match");
        }

        try {
            setError("");
            setLoading(true);
            await signup(registerEmail, registerPassword);
            history.push("/");
        } catch (error) {
            setError("Failed to create an account");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {error && <Alert variant="danger">{error}</Alert>}

                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" onChange={(event) => setRegisterEmail(event.target.value)} required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={(event) => setRegisterPassword(event.target.value)} required />
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" onChange={(event) => setRegisterConfirmPassword(event.target.value)} required />
                    </Form.Group>
                    <Button onClick={register} disabled={loading} className="w-100 mt-3">Sign Up</Button>

                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to="/login">Log In</Link>
            </div>
        </>
    );
};

export default Signup;
