import Container from './styled.js'

export default function perfil() {
    return (
        <Container>
    <div className='gab-pai'>
        <div className='gab-cabec'>
            <div className='gab-logo'> <img src='/assets/images/logo.svg' alt='' /></div>
            <div className='gab-btn-sair'> <img src='/assets/images/sair.svg' alt='' /></div>
        </div>
        <div className='gab-conteudo'>
            <div className='gab-form1'>
                <div className='gab-email'>EMAIL: gabs@gmail.com <span>Alterar email</span> </div>
                <div className='gab-numero'>NÚMERO: 40028922 <span className='gab-img1'><img src='/assets/images/verificado.svg' alt=''  /></span> <span className='gab-verif'>VERIFICADO</span></div>
                <div className='gab-conect'><span className='gab-img2'><img src='/assets/images/silas.png' alt='' /></span>Silas</div>
            </div>
            <div gab-form2>
                <div className='gab-foto'> <img src='/assets/images/silas.png' alt='' /> </div>
                <div className='gab-info'>
                    <div className='gab-nome'>NOME: <input></input></div>
                    <div className='gab-sobrenome'>SOBRENOME: <input></input></div>
                    <div className='gab-cpf'>CPF: <input></input></div>
                </div>
                <div className='gab-planos'>
                    <div className='gab-plano-imagem'> <img src='/assets/images/plano.svg' alt='' />  </div>
                    <div className='gab-plano-texto'>
                        <div className='gab-text1'>Plano premium</div>
                        <div className='gab-text2'>Atualize agora</div>
                    </div>
                </div>
            </div>
            <div>
                <div className='gab-endereco'>
                    <table>
                    <tr>
                        <th>MEUS ENDEREÇOS</th>
                    </tr>
                    <tr>
                       <td className='gab-celula'> | Rua Henriqueta Salvadore Giacometti</td>
                    </tr>
                    <tr>
                       <td className='gab-celula'> | Rua Henriqueta Salvadore Giacometti</td>
                    </tr>
                    </table>
                </div>
                <div className='gab-enderecoa'>
                    <div className='gab-end1'>ADICIONAR NOVO</div>
                    <div className='gab-endsvg'><img src='/assets/images/mais.svg' alt='' /> </div> 
                </div>
            </div>
        </div>
    </div>
    </Container>   
    )
}