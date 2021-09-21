import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-direction: column; 

.gab-meucarrinho {
    text-align: center;
}

.gab-btn-comprartodos > button {
    width: 351px;
    height: 80px;
    left: 1129px;
    top: 234px;

    background: rgba(231, 138, 29, 0.86);
    border-radius: 7px;

    font-size: 2.25em;

    float: right;
    margin-right: 10px;
}

.gab-retfundo {
    width: 1291px;
    height: 1351px;
    left: 122px;
    top: 337px;
    align-self: center;

    background: rgba(79, 110, 146, 0.89);
}

.gab-produto  {

    display: flex;
    flex-direction: row;

    left: 3.07%;
    right: 3.67%;
    top: 21.11%;
    bottom: 59.21%;

    background: #FFFFFF;
    border: 3px solid #E78A1D;
    box-sizing: border-box;

}

.gab-btnprod {
    display: flex;
    flex-direction: column;
    align-items: center;
    float: right;
}

.gab-imagemprod > img {
    width: 163px;
    height: 243px;
    left: 18px;
    top: 58px;
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
    width: 270px;
    height: 52px;
    left: 971px;
    top: 233px;

    background: #355775;
    border-radius: 5px;

    font-family: Roboto Slab;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 32px;

    color: #FFFFFF;
}

`
export default Container 