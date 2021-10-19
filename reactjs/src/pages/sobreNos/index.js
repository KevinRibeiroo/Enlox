import Cabecalho from "../../components/cabecalho";
import Rodape from "../../components/rodape";


export default function sobreNos (){


/*    let photo = document.getElementById('imgPhoto');
    let file = document.getElementById('flImage');



    <img src="https://i1.sndcdn.com/artworks-000608006128-bvmugt-t500x500.jpg" id="imgPhoto" alt=""   onClick={() => file.click()} />
    <input type="file" id="flImage" name="fImage" accept="image/*" onChange={(e) => {let reader = new FileReader();

reader.onload = () => {
photo.src = reader.result;
}

reader.readAsDataURL(file.files[0])}}/>



    console.log(file)

    console.log(photo)

    */
    return (
        <main>
            <Cabecalho />
                <div className="fx1" style={{display: "flex", flexDirection: "row", justifyContent: "space-between", height:"55vh"}}><div className="conteudo-text" style={{display: "flex", flexDirection: "column", width: "15em", alignSelf: "center", marginLeft: "5em" }}><div className="titulo"><h2>Sobre Nós</h2></div>
                <div className="conteudo">Nós, da Enlox, somos uma empresa focada e direta, sempre priorizando o consumidor e garantindo um serviço de qualidade e seguro</div></div>
                <div style={{display: "flex", alignSelf:"center"}}> <img src="/assets/images/note.svg" alt="" style={{marginRight: "5em", width: "20em"}} /> </div></div>

                <div className="fx2" style={{display: "flex", flexDirection: "row", justifyContent: "space-between", height:"55vh", backgroundColor: "#F2F0D8"}}>
                <div style={{display: "flex", alignSelf:"center"}}> <img src="/assets/images/img1.svg" alt="" style={{marginLeft: "5em", width: "20em"}} /> </div>
                <div className="conteudo-text" style={{display: "flex", flexDirection: "column", width: "15em", alignSelf: "center", marginRight: "5em" }}><div className="titulo"><h2>COMPRE E VENDA</h2></div>
                <div className="conteudo">Nosso sistema te permite tanto comprar, quanto anunciar produtos dos mais variados tipos! Tudo isso com a maior segurança do mercado </div></div></div>

                <div className="fx1" style={{display: "flex", flexDirection: "row", justifyContent: "space-between", height:"55vh"}}><div className="conteudo-text" style={{display: "flex", flexDirection: "column", width: "15em", alignSelf: "center", marginLeft: "5em" }}><div className="titulo"><h2>A SUA SEGURANÇA É A NOSSA SEGURANÇA</h2></div>
                <div className="conteudo">Nossos anúncios passam por diversas etapas de confirmação, assim minimizando o percentual de anúncios falsos. Mesmo assim, estornamos qualquer valor caso algo de mal lhe tenha acontecido!</div></div>
                <div style={{display: "flex", alignSelf:"center"}}> <img src="/assets/images/compra.svg" alt="" style={{marginRight: "5em", width: "20em"}} /> </div></div>

            <Rodape />
        </main>
    )
}