import React, { useState } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [loginEmail, setLoginEmail] = useState("");
    const [message, setMessage] = useState("");
    const { resetPassword } = useAuth();

    const login = async () => {
        try {
            setMessage("");
            setError("");
            setLoading(true);
            await resetPassword(loginEmail);
            setMessage("Check your inbox for further instructions");
        } catch (error) {
            setError("Failed to reset password");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Password Reset</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" onChange={(event) => setLoginEmail(event.target.value)} required />
                    </Form.Group>
                    <Button onClick={login} disabled={loading} className="w-100 mt-3">Reset Password</Button>
                    <div className="w-100 text-center mt-2">
                        <Link to="/login">Login</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
        </>
    );
};

export default ForgotPassword;
