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
    line-height: 1em;

    width: 100%;
    height: 11em;
    background-color: #4F6E92;
}

.gab-logo {
    margin-top: 4em;
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
    margin-top: 5em;
    margin-left: 2em;
}
.gab-form1 > div{
    border-style: solid;
    border-color: #E78A1D;
    height: 4em;

    font-weight: bold;
    font-size: 1em;

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
    margin-left: -2em;
    width: 18em;
    height: 18em;
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
     justify-content: space-between;
}

.gab-planos {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2em;
    margin-left: -2em;
    padding: 0.5em;
    width: 18em;

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

.gab-endereco, .gab-enderecoa {
    margin-right: 4em;
    width: 17em;

    border-style: solid;
    border-color: #E78A1D;
}

.gab-endereco {
    margin-top: 4em;
    height: 15em;
}

.gab-endereco > table > tr >th {
    font-size: 1.5em;
}

.gab-endereco >table > tr > td {
    font-size: 1em  ;
}

.gab-enderecoa {
    display: flex;
    flex-direction: row;
    height: 4em;
    line-height: 4em;
    font-size: 1em;
    justify-content: space-around;
}

.gab-end1 {
    font-size: 1em;
    font-weight: bold;
}

.gab-enderecoa > div > img {

    vertical-align: middle;
}

.gab-celula {
    font-size: 1.4em;
}

`

export default Container