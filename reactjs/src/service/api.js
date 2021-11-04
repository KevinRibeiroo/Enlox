import axios from "axios";





const api = axios.create({
    baseURL: 'https://enloxx.herokuapp.com'
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

            async listarProdutoCategoria(id){
                const r = await api.get(`/produtos/${id}`);

                return r.data;
            }

            async removerProduto(id){
                let r = await api.delete(`/produto/${id}`);
                return r.data;
            }
    
            async editar( id, nome, categoria, preco,  descProduto, estoque, img,) {
                let r = await api.put(`/produto/${id}`, { nome, categoria, preco, descProduto, estoque, img, })
                return r.data
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