import api from "@/plugins/vueAxios";

export default class LoginService {

    static async login(login){
        return await api.post('/sessions', login);
    }
    
}
