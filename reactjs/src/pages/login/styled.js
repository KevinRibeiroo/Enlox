import styled from "styled-components";







const StyledLogin = styled.div `

display: flex;
flex-direction: column;


.title-login {
    font-family: Snippet-Regular;
    font-style: normal;
    font-weight: normal;
    font-size: 35px;
    line-height: 40px;
    text-align: center;
    letter-spacing: 0.1em;

    color: #000000;
}


.agp-inputs {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33em;
    height: 4em;
    border-radius: 1em;

    background: #B0BDC6;

    justify-content: space-evenly;
    padding-left: 1em;
}

.agp-inputs-login {
    display: flex;
    flex-direction: column;
    height: 10em;
    justify-content: space-around;
}

.label-login {
    font-family: Snippet-Regular;
font-style: normal;
font-weight: normal;
font-size: 1.1em;
line-height: 17px;
text-align: center;
letter-spacing: 0.1em;

color: #000000;

}

.container-login {
    display: flex;
    flex-direction: column;
    background-image: url('/assets/images/Tela de login.png');

    height: 130vh;

    align-items: center;
    background-size: cover;
}

.cdstr {
    outline: none;
    text-decoration: none;

    font-family: Snippet-Regular;
font-style: normal;
font-weight: bolder;
font-size: 1em;
line-height: 17px;
text-align: center;
letter-spacing: 0.1em;

color:  #4A78BD;

padding-left: 0.5em;
}


.text-login {
    outline: none;
    text-decoration: none;

    font-family: Snippet-Regular;
font-style: normal;
font-weight: bolder;
font-size: 1em;
line-height: 17px;
text-align: center;
letter-spacing: 0.1em;


}

.esqueci{height:2em!important;
    font-family: Snippet-Regular;
    cursor:pointer;}
.esqueci:hover{
    background-color: rgba(79,110,146,0.89);
}
.e{text-decoration:none;
color:black;}
.logar-fora {



    display: flex;
    align-items: center;
    justify-content: center;
    width: 30em;
    height: 4em;
    border-radius: 2em;

    background: #B0BDC6;
}


.login {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;

    width: 40em;
    height: 45em;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    margin-top: 5em;
}

.login > div {
    margin: 1em 0em;
}
`


export { StyledLogin }