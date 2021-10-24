import Cookies from 'universal-cookie';

const cookies = new Cookies();

const LoginService = {
    doLogin: (username, password) => {
        const oldDate = new Date();
        const date = new Date(oldDate.getTime() + 10 * 60000);
        cookies.set('token', username + "-token", {
            path: "/",
            expires: date,
            secure: false,
        });
    }
}

export default LoginService;
