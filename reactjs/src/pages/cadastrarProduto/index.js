import Cabecalho, { usuLogado } from "../../components/cabecalho"

import { Conteudoprodut } from "./styled"
import { InputCadastrar, TextareDesc, InputTipo, InputPreco, InputImage, InputLocal, InputImg } from "../../components/inputs/styled"
import {BotaoCdstr, InserirAnuncio} from '../../components/botoes/styled';
import { useEffect, useState } from "react";
import axios from "axios";
import Api from "../../service/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router";
import { Link } from "react-router-dom";


const api = new Api();
//import { useState } from "react";

export default function CadastrarProduto () {


    
    const nav = useHistory();

    async function cadastrarProdutoo() {
        

        

        const resp = await api.cadastrarProduto(usuarioLogado.id_usuario, idCategoria, img1, nmProduto, preco, desc);
        console.log(resp)

        if (resp.error) {
            toast.error(`${resp.error}`);
        } else {
            nav.push("/meusAnuncios");
        }
    }


    let file = document.getElementsByClassName('upload');
    //const [imgproduto, setImgproduto] = useState('');


    const [nmProduto, setNmProduto] = useState('');
    const [desc, setDesc] = useState('');
    const [preco, setPreco] = useState('');
    const [idCategoria, setIdCategoria] = useState(0)
    const [imgPrincipal, setImgPrincipal] = useState('')
    const {testinho, setTestinho} = useState('');


    const [img1, setImg1] = useState([]);


    let usuarioLogado = usuLogado() || {};




    /*async function inserirProduto() {
        const r = await api.cadastrarProduto(usuarioLogado.id_usuario, idCategoria,img1,img2,img3,img4,nmProduto, preco, desc );


   
        if(r.error){
            toast.error(`${r.error}`)
        } else {
            nav.push('/')
        }
    }*/

    
    function Preview() {
       


        if(img1) {

    
            
             return img1.map((x) => URL.createObjectURL(x));
            
        }
    
    
    }
 
    
  
    function selectFile() {
        let input = document.getElementsByClassName("upload");
        input.click();
    }
    
    function asdklsajkl() {
        return () => {
            const r = "oi";
        }
    }

        //console.log(Preview())
      // useEffect(() => {console.log('test')}, [img1])
        

   //console.log(img1.length)
   
    console.log("imagem 1")
    console.log(img1)

    setInterval(() => {
      Preview()
    }, 5)
    //console.log(usuarioLogado.id_usuario)
    return (
        
        <Conteudoprodut>
            <ToastContainer />
            <Cabecalho />
                <div className="container">
                <div className="title-pag">
                    
                Insira seu proprio anuncio
                </div>
                    <div className="conteudo-cdstr">
                        <InputCadastrar placeholder="Insira o nome do produto" value={nmProduto} onChange={(e) => setNmProduto(e.target.value)} />
                        <TextareDesc placeholder="Insira descrição do produto" value={desc} onChange={(e) => setDesc(e.target.value)}/>
                    

                        <div className="agp-input">
                            <div className="label">Escolha sua categoria</div>
                         
                            <div className="agp-botao">
                                <BotaoCdstr onClick={() => setIdCategoria(1)}>Eletronicos</BotaoCdstr>
                                <BotaoCdstr onClick={() => setIdCategoria(2)}>Mobilia</BotaoCdstr>
                                <BotaoCdstr onClick={() => setIdCategoria(3)}>Beleza</BotaoCdstr>
                                <BotaoCdstr onClick={() => setIdCategoria(4)}>Esportes</BotaoCdstr>
                                <BotaoCdstr onClick={() => setIdCategoria(5)}>Construções</BotaoCdstr>
                                <BotaoCdstr onClick={() => setIdCategoria(6)}>Brinquedos</BotaoCdstr>
                                <BotaoCdstr onClick={() => setIdCategoria(7)} >Auto-Peças</BotaoCdstr>
                                <BotaoCdstr onClick={() => setIdCategoria(8)} style={{borderBottom: "none"}}>Outros</BotaoCdstr>
                            </div>
                        </div>
                        
                        
                        <div className="agp-input">
                            <div className="label">Preço</div>
                            <InputPreco placeholder="Preço(R$)" value={preco} onChange={(e) => setPreco(e.target.value)} multiple />
                        </div>
                        <div className="agp-input">
                        <InputImage type="file" className="upload" accept="image/*"  onChange={e => img1.push(e.target.files[0])}/>
              
                        {Preview().map((x) => 
    <img src={x} style={{width: "8em", height:"8em", borderRadius: "1em"}} alt="" />
                        )}
                        
                        </div>

                        
                        


                        <InserirAnuncio style={{alignSelf: "flex-end"}} onClick={() => cadastrarProdutoo()}> Inserir Anuncio</InserirAnuncio>
                    </div>

        </div>
          
        </Conteudoprodut>
    )

    /*  <div className="label">Imagem 1</div>
    <InputImg placeholder="insira a url da imagem" value={img1} onChange={e => setImg1(e.target.value)} />
    <div className="label">Imagem 2</div>
    <InputImg placeholder="insira a url da imagem" value={img2} onChange={e => setImg2(e.target.value)} />
    <div className="label">Imagem 3</div>
    <InputImg placeholder="insira a url da imagem" value={img3} onChange={e => setImg3(e.target.value)} />
    <div className="label">Imagem 4</div>
    <InputImg placeholder="insira a url da imagem" value={img4} onChange={e => setImg4(e.target.value)} />*/
}