import axios from "axios";





const api = axios.create({
    //baseURL: 'https://enloxx.herokuapp.com'
    baseURL: 'http://localhost:3030'
})


export default class Api {


   
    
        async cadastrarUsuario(nm_usuario,nm_nome, ds_cpf,nr_celular, ds_email, ds_senha,nascimento, ds_cep, nr_casa, bairro,cidade) {
            const r = await api.post('/usuario', {nm_usuario,nm_nome, ds_cpf,nr_celular, ds_email, ds_senha,nascimento, ds_cep, nr_casa, bairro,cidade})
            return r.data;
        }


        
        async listarUsu(id) {
            const r = await api.get(`/usuario/${id}`)
            return r.data;
        }




        async logarr(ds_email, ds_senha) {
            const r = await api.post('/login', {ds_email, ds_senha});
            return r.data;
        }


            async cadastrarProduto(id, nm, preco, descricao, avaliacao, img ){
                const r = await api.post(`/produto/${id}`, {nm, preco, descricao, avaliacao, img});

                return r.data;
            }


            async listarProduto() {
                const r = await api.get('/produto');

                return r.data;
            }


            //ver isso daqui
            async listarProdutoComDesconto() {
                const r = await api.get('/produto');

                return r.data;
            }}