import API from './api';

const AuthService = {
    login: (data) => {
        return API.post('/login', data).then(({data}) => {
            API.defaults.headers['Authorization'] = `Bearer ${data.token}`;
            return data;
        }
        ).catch(error => {
            console.log('Auth Service Error: ', error);
            throw error;
        });
    },

    register: (data) => {
       return API.post("/register", data).then().catch();
    },

    logout: async () => {
        
    }
};

export default AuthService;