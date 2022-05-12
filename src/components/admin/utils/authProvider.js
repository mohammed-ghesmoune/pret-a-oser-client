import jwtDecode from "jwt-decode";

const ENTRYPOINT = process.env.REACT_APP_API_ENTRYPOINT;

const authProvider = {
    login: ({ username, password }) => {
        const request = new Request(
            `${ENTRYPOINT}/authentication_token`,
            {
                method: "POST",
                body: JSON.stringify({ email: username, password }),
                headers: new Headers({ "Content-Type": "application/json" }),
            }
        );
        return fetch(request)
            .then((response) => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ token }) => {
                localStorage.setItem("token", token);
            });
    },
    logout: () => {
        localStorage.removeItem("token");
        return Promise.resolve();
    },
    checkAuth: () => {
        try {
            // @ts-ignore
            if (!localStorage.getItem("token") || new Date().getTime() / 1000 > jwtDecode(localStorage.getItem("token"))?.exp) {
                return Promise.reject();
            }
            return Promise.resolve();
        } catch (e) {
            // override possible jwtDecode error
            return Promise.reject();
        }
    },
    getIdentity: () => {
        try {
            const { email, username } = jwtDecode(localStorage.getItem("token"));
            return Promise.resolve({ email, username });
        } catch (error) {
            return Promise.reject(error);
        }
    },
    checkError: (err) => {
        if ([401, 403].includes(err?.status || err?.response?.status)) {
            localStorage.removeItem("token");
            return Promise.reject();
        }
        return Promise.resolve();
    },
    getPermissions: () => {
        const roles = jwtDecode(localStorage.getItem("token"))?.roles;
        return roles ? Promise.resolve(roles) : Promise.reject()
    },
};

export default authProvider;