import axios from "axios";





const api = axios.create({
    // baseURL: 'https://enloxx.herokuapp.com'
    baseURL: 'http://localhost:3030'
})


export default class Api {


    //async listarVistoRecente()


   
    async cadastrarUsuario(nm_usuario,nm_nome, ds_cpf,nr_celular, ds_email, ds_senha, ds_cep, nr_casa,ds_cidade,nm_rua) {
        const r = await api.post('/usuario', {nm_usuario,nm_nome, ds_cpf,nr_celular, ds_email, ds_senha, ds_cep, nr_casa,ds_cidade,nm_rua})
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


        async alterar( id, nome, categoria, preco, descProduto) {
            let r = await api.put(`/produto/${id}`, { nome, categoria, preco, descProduto})
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

  async listarCategorias(id) {
      const r = await api.get(`/categoria/${id}`);
      return r.data;
  }


  async cadastrarProduto(id1, id2, imgPrincipal , nmProduto, preco, desc ){

        let formData = new FormData();

        //const r32 = [imgPrincipal]
       //const r45 = []
        formData.append('desc', desc);
        formData.append('imgPrincipal', imgPrincipal[0]);
        formData.append('imgPrincipal', imgPrincipal[1]);
        formData.append('imgPrincipal', imgPrincipal[2]);
        formData.append('imgPrincipal', imgPrincipal[3]);
        formData.append('nmproduto', nmProduto);
        formData.append('preco', preco); 

      const r = await api.post(`/produto/${id1}/${id2}`, formData,  {
          headers: {
              "Content-Type": "multipart/form-data"
          }
      } )

     
      console.log(imgPrincipal);
      console.log(preco)
      
    return r.data;
  }

  async listarUpload(){
      const r = await api.get('/produtinho');
      return r.data;
  }

  async  editarFoto(id, foto) {
    let formData = new FormData();
    formData.append('foto', foto)

    let resp = await api.put(`/usuario/${id}`, formData,  {
        headers: {
            "Content-Type": "multipart/form-data"
        }
        
    })
    console.log(formData)
    console.log(foto)
    return(resp.data)
 }

    async listarFoto(){
        const r = await api.get('/usuariozin');
        return r.data;
    }

    async alterarEmail(id, email) {
        const r = await api.put(`/usuarioEmail/${id}`, {email} )
        return r.data
    }

    async alterarNumero(id, num) {
        const r = await api.put(`/usuarioNumero/${id}`, {num} )
        return r.data
    }

    async alterarNick(id, nick) {
        const r = await api.put(`/usuarioNick/${id}`, {nick} )
        return r.data
    } 

    async alterarEndereco(id, endereco) {
        const r = await api.put(`/usuarioEndereco/${id}`, {endereco} )
        return r.data
    } 

        }
