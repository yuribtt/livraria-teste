import React from "react";
import { useFormik } from 'formik';

function Login() {

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: values => {
            console.log(values);
        }
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Usuário</label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                />
                <label htmlFor="password">Senha</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}

export default Login;
