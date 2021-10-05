
import Container from './styled'
import Cabecalho from '../../components/cabecalho/index.js'
import Rodape from '../../components/rodape/index.js'

export default function primeiroAnuncio() {
    return (
        <Container>
            <Cabecalho /> 
<div className='gab-pai'>
        <div className='gab-faixa1'>
            <div className='gab-faixa1-cont'>
                <div className='gab-faixa1-tit'>
                <h1>Primeira vez</h1> <br />
                <h1>Anunciando?</h1> <br />
                </div>
                <p>A Enlox é a plataforma <br /> amiga dos anunciantes! <br />
Não precisa mais de algo? <br /> Venha anunciar na Enlox!</p>
            </div>
        </div>

        <div className='gab-faixa2'>
            <div className='gab-faixa2-img'><img src='/assets/images/queroanunciar.svg' alt='' />  </div>
            <div className='gab-faixa2-cont'>
                <h1>Passos para anunciar </h1> <br />
                <p>Começando pelo nosso botão de < br /> “Quero Anunciar”, você será levado <br />  para uma tela de formulário, para <br /> preencher sobre os dados do seu produto</p>
            </div>
        </div>

        <div className='gab-faixa3'>
            <div className='gab-faixa3-cont'>
                <h1>Recomendações para melhorar</h1>  <br />
                <h1>Seu anúncio </h1> <br />
                <p>Seja direto ao ponto! Explique <br /> diretamente sobre o que é o produto, <br /> e o estado dele. <br /> Também prefira enviar fotos visíveis do produto, <br /> e com resolução de 1200 x 1200px</p>
            </div>
            <div className='gab-faixa3-img'>
                <img src='/assets/images/imagemteste.svg' alt='' />
            </div>
        </div>
</div>
<Rodape />
</Container>   )
}