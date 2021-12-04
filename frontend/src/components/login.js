import React, {useState} from "react";

const Login = props => {

    const initialUserState = {
        name: "",
        id: "",
    };

    const [user, setUser] = useState(initialUserState);

    const handleInputChange = event => {
        const {name, value} = event.target;
        setUser({...user, [name]: value});
    };

    const login = () => {
        props.login(user);
        props.history.push('/');
    }

    return (
        <div className={"p-5"}>
            <div className={'container pt-5'}>
                <div className={'row justify-content-center align-content-center pt-5'}>
                    <div className={'col-md-6 pt-5'}>
                        <h1 className={'text-center'}>LOGIN</h1>
                        <div className={"p-5 login-top-padding"}>
                            <div className={"submit-form"}>
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="user">Username</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            required
                                            value={user.name}
                                            onChange={handleInputChange}
                                            name="name"
                                        />
                                    </div>

                                    <div className="form-group pt-3">
                                        <label htmlFor="id">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="id"
                                            required
                                            value={user.id}
                                            onChange={handleInputChange}
                                            name="id"
                                        />
                                    </div>

                                    <button onClick={login} className="btn btn-success mt-4 text-black w-100">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default Login;