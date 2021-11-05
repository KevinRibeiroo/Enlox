import styled from 'styled-components'

const Container = styled.div`



a{
    color: #4F6E92;
}
 
.agp{
    display: flex;
    flex-direction: row;
    margin: 2.5em;
}

.img-agp img{
    max-width: 10em;
    max-height: 10em;
    border: solid;
    border-width: 1.8px;
    border-radius: 10px;
}

.texto1{
    display: flex;
    flex-direction: column;
    font-size: 17.37px;
    width: 20em;
    margin: 3em 5em 0em 1em;
}

.premium{
    margin-left: 7em;
    margin-top: 3em;
    max-width: 20em;
}
.botoes{
    display: flex;
    flex-direction: column;
    margin-left: 17em;
    margin-top: 3em;
}

.botoes button {
    height: 40px;
    width: 156px;
    left: 1200px;
    top: 960px;

    cursor: pointer;
    margin-bottom: 1em;

    background: rgba(79, 110, 146, 0.89);
    color: #ffffff;
    border-radius: 3px;
    border: none;
   
}

.editar  {
    height: 40px;
    width: 156px;
    left: 1200px;
    top: 960px;

    margin-bottom: 1em;

    background: rgba(79, 110, 146, 0.89);
    color: #ffffff;
    border-radius: 3px;
    border: none;
   
}

.butoes{
    margin-bottom: 1.5em;
    
}

.texto{
    font-size: 20px; 
    width: 50%;
}



`
export default Container 