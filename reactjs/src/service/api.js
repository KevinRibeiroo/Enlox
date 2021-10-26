import axios from "axios";





const api = axios.create({
    baseURL: 'http://localhost:3030'
})


export default class Api {




        async cadastrarUsuario(nm_usuario, ds_cpf, ds_email, ds_senha, ds_cep, nr_casa, ds_complemento) {
            const r = await api.post('/usuario', {nm_usuario, ds_cpf,  ds_email, ds_senha, ds_cep, nr_casa, ds_complemento})
            return r.data;
        }


        
        async listarUsu(id) {
            const r = await api.get(`/usuario/${id}`)
            return r.data;
        }




        async logar2(ds_email, ds_senha) {
            const r = await api.post('/login2', {ds_email, ds_senha});
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


        async inserirChatUsu(id_comprador, id_vendedor) {
            const r = await api.post(`/chat_usu/${id_comprador}/${id_vendedor}`);

            return r.data;
        }

        async listarChatUsu(id) {
            const r  = await api.get(`/chat_usu/${id}`);

            return r.data;
        }

        async inserirMsg(idUsu, idUsu2, msg) {
            const r = await api.post(`/chat/${idUsu}/${idUsu2}`, {msg});

            return r.data;
        }

        async listarMsg(idUsu, idUsu2) {
            const r = await api.get(`/chat/${idUsu}/${idUsu2}`);

            return r.data;
        }

}