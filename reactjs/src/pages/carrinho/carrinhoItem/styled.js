
import styled from 'styled-components'


const Container = styled.div `
.gab-produto  {


    display: flex;
    flex-direction: row;
    
    margin-top: 3em;
    margin-left: -5.5em;
    margin-right: 2em;
    margin-bottom: 2em;
    position: relative;

    height: 200px;
    width: 120%;
    
    border-radius: 0px;

    background: #FFFFFF;
    border: 3px solid #E78A1D;
    box-sizing: border-box;
}

.gab-produto > ul, li { 
    list-style-type: none;

}

.gab-btnprod {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    float: right;
}

.gab-imagemprod > img {
    width: 80%;
    height: 80%;
    padding-top: 1em;
    padding-left: 5.5em;
}

.gab-tit {
    width: 249px;
    height: 44px;
    left: 220px;
    top: 84px;

    font-family: Roboto Slab;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 37px;

    color: #353535;
}

.gab-tit2 {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;

    color: #000000;
}

.gab-tit3 {
    width: 327px;
    height: 49px;
    left: 223px;
    top: 246px;

    font-family: Roboto Slab;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 21px;

    color: #353535;
}

.gab-btn-comprar > button {
    width: 200px;
    height: 52px;
    left: 971px;
    top: 233px;
    float: inline-end;
    margin-bottom: 1em;
    margin-left: 3.5em;

    background: #355775;
    border-radius: 5px;

    font-family: Roboto Slab;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 32px;

    color: #FFFFFF;
}

.gab-btn-remover {
    margin-top: 2em;
    margin-left: 5em;
    align-self:center;
}

.gab-imgli > img {
    width: 22;
    height: 22;
}
`

export default Container 