import{Carrossel} from './styled.js';




function listarImg(img) {
     
    if (img.includes('http'))
      return img

    else
        return `http://localhost:3030/produtinho?imagem=${img}`

}

export default function CarrosselComp(props) {
  


    return(
        <Carrossel>
        <div class="item-a">
                                    


        <div className="hbox">
            <div className="himagem">
                
                <img className="himagem2" src={listarImg(props.info.ds_imagem1)} alt="touch"/>
                <div className="hsobreposicao">
                    <div className="hcomprar">Comprar</div>
                </div>
            </div>

            <div className="hdetalhes">
                <div className="htitulo">{props.info.nm_produto}</div>
                <div className="hprecode">R${parseFloat(props.info.vl_preco) + parseFloat(props.info.nr_desconto)}</div>
                <div className="hprecopor">R${props.info.vl_preco}</div>
            </div>

        </div>
        </div>
        </Carrossel>
    )
    
}
export {CarrosselComp}
export {listarImg}