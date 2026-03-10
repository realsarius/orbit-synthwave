import React, { useState } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const { login } = useAuth();

    const history = useHistory();

    const handleLogin = async () => {
        try {
            setError("");
            setLoading(true);
            await login(loginEmail, loginPassword);
            history.push("/dashboard");
        } catch (error) {
            setError("Failed to sign in");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Login</h2>
                    {error && <Alert variant="danger">{error}</Alert>}

                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" onChange={(event) => setLoginEmail(event.target.value)} required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type={"password"}
                                      onChange={(event) => setLoginPassword(event.target.value)} required/>
                    </Form.Group>
                    <div className="w-100 text-center mt-2">
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                    <Button onClick={handleLogin} disabled={loading} className="w-100 mt-3">Log In</Button>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
        </>
    );
};

export default Login;
