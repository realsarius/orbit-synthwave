import React, { useState } from "react";
import { Form, Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

const UpdateProfile = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { currentUser, updateEmail, updatePassword } = useAuth();
    const [registerEmail, setRegisterEmail] = useState(currentUser?.email || "");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");

    const history = useHistory();

    const register = async (e) => {
        e.preventDefault();

        if (registerPassword !== registerConfirmPassword) {
            return setError("Passwords do not match");
        }

        const promises = [];
        setLoading(true);
        setError("");

        if (registerEmail !== currentUser.email) {
            promises.push(updateEmail(registerEmail));
        }

        if (registerPassword) {
            promises.push(updatePassword(registerPassword));
        }

        try {
            await Promise.all(promises);
            history.push("/");
        } catch {
            setError("Failed to update account");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Update Profile</h2>
                    {error && <Alert variant="danger">{error}</Alert>}

                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            onChange={(event) => setRegisterEmail(event.target.value)}
                            required
                            value={registerEmail}
                        />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control
                            type="password"
                            onChange={(event) => setRegisterPassword(event.target.value)}
                            placeholder="Leave blank to keep the same"
                        />
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control
                            type="password"
                            onChange={(event) => setRegisterConfirmPassword(event.target.value)}
                            placeholder="Leave blank to keep the same"
                        />
                    </Form.Group>
                    <Button onClick={register} disabled={loading} className="w-100 mt-3">Update</Button>

                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Link to="/">Cancel</Link>
            </div>
        </>
    );
};

export default UpdateProfile;
