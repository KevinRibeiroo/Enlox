import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3030'
})


export default class Api {


        async logando(ds_email, ds_senha) {
            let r = await api.post('/login', {ds_email, ds_senha});
            return r.data;
        }



        async cadastrarUsuario(nm_usuario, ds_cpf, ds_email, ds_senha, ds_cep, nr_casa, ds_complemento) {
            const r = await api.post('/usuario', {nm_usuario, ds_cpf,  ds_email, ds_senha, ds_cep, nr_casa, ds_complemento})
            return r.data;
        }


        
        async listarUsu(id) {
            const r = await api.get(`/usuario/${id}`)
            return r.data;
        }




        async logar2(ds_email) {
            const r = await api.post('/login2', {ds_email});
            return r.data;
        }
}