import styled from 'styled-components'

const Container = styled.div`

.gab-pai {
    display: flex;
    flex-direction: column;
}

.gab-faixa1 {
    background-color: #F2F0D8;
    height:30em ;
}

.gab-faixa1-cont >  * {
    text-align: center;
    line-height: 0em;
}

.gab-faixa1-tit {
    margin-top: 4em;
    font-size: 1.5em;
}


.gab-faixa1-cont > h1 {
    font-size: 3em;
    margin-top: 0em;
}

.gab-faixa1-cont > p {
    line-height: 2em;
    font-size: 1.5em;
    margin-top: 1em;
    font-weight: bold;
    margin-bottom: 3em;
}

.gab-faixa2 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 30em;
}

.gab-faixa2-img > img {
    display: flex;
    width: 30em;
    margin-top: 7em;
    margin-bottom: 4em;
    margin-left: 6em;
}

.gab-faixa2-cont  {
     margin-right: 4em;
     margin-top: 4em;
     margin-bottom: 4em;
}

.gab-faixa2-cont > h1 {
    margin-bottom: -0.5em;
    font-size: 3em;
}

.gab-faixa2-cont > p {
    font-size: 1.5em;
    font-weight: bold;
}

.gab-faixa3 {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #F2F0D8;
    height: 30em;
    padding-top: 4em;
}

.gab-faixa3-cont {
    margin-left: 2em;
}


.gab-faixa3-cont > h1 {
    margin-bottom:-1em;
    font-size: 3em;
}

.gab-faixa3-img > img{
    height: 25em;
    width: 20em;
    margin-left: 2em;
     
}


.gab-faixa3-cont > p {
    font-size: 1.5em;
    font-weight: bold;
}


`
export default Container 