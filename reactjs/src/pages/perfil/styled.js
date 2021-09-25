import styled from 'styled-components'

const Container = styled.div`
.gab-pai{
    display: flex;
    flex-direction:column;
}

.gab-cabec {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 100%;
    height: 13em;
    background-color: #4F6E92;
}

.gab-logo {
    margin-top: 4.5em;
    margin-left: 3em;
}

.gab-btn-sair {
    margin-top: 3em;
    margin-right: 3em;
}

.gab-conteudo {
    display: flex;
    flex-direction: row;
    justify-content: space-between
}

.gab-form1 {
    margin-top: 6em;
    margin-left: 3em;

}
.gab-form1 > div{
    border-style: solid;
    border-color: #E78A1D;
    height: 4em;

    font-weight: bold;
    font-size: 1.2em;

    line-height: 4em;
}

.gab-img1 > img{
    width: 3em;
    height: 2em;
    color: #34D231;
    margin-right: -1.3em;
}

.gab-img2 > img{
    width: 3em;
    height: 3em;
    vertical-align: middle;
    margin-right: 2em;
    margin-left: 1.2em;
}

.gab-verif {
    color: #34D231;
}

.gab-form2 {
    display: flex;
    flex-direction: column;
    align-items: center;    
}

.gab-foto >img {
    margin-top: -8em;
    margin-left: -4em;
    width: 20em;
    height: 20em;
}

.gab-info {
    font-weight: bold;
    margin-left: -4em;
}

.gab-info >div >input {
    margin-bottom: 1.2em;
    width: 20em;
    padding-left: 1em;

    border-radius: 5em;
    background-color: #B0BDC6;
    height: 2.2em;
    border-style: none;
    outline: none;
}
.gab-plano-texto >div {

    margin-left: -10em;
}

.gab-planos {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2em;
    margin-left: -5em;
    padding: 0.5em;
    width: 21em;

    border-style: solid;
    border-color: #E78A1D;
}

.gab-text1 {
    font-weight: bold;
    color: #E78A1D;
    font-size: 1.5em;
    margin-bottom: 1em;
}

.gab-text2 {
    font-size: 1.3em;
    text-decoration: underline;
}


`

export default Container