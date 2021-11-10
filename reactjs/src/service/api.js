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
            }


           

            async listarProdutoCategoria(id){
                const r = await api.get(`/produtos/${id}`);

                return r.data;
            }

            async removerProduto(id){
                let r = await api.delete(`/produto/${id}`);
                return r.data;
            }
    
            async editar( id, nome, categoria, preco,  descProduto) {
              const r = await api.put(`/produto/${id}`, { nome, categoria, preco, descProduto })
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

        async listarMsg(idUsu) {
            const r = await api.get(`/chat/${idUsu}`);

            return r.data;
        }


        async listarChatEspecifico(idChat){
            const r = await api.get(`/chat_usu2/${idChat}`);

            return r.data;
        }


           async listarMeusprodutos(id) {
               const r =await api.get(`/produtoss/${id}`)
                return r.data;
         }

}