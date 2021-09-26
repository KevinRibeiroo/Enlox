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
    max-width: 200px;
    border: solid;
    border-width: 1.8px;
    border-radius: 10px;
}

.texto1{
    display: flex;
    flex-direction: column;
    font-size: 17.37px;
    margin: 3em 5em 0em 1em;
}

.premium{
    margin-left: 7em;
    margin-top: 3em;
}
.butoes{
    display: flex;
    flex-direction: column;
    margin-left: 17em;
    margin-top: 3em;
}

.butoes button {
    height: 40px;
    width: 156px;
    left: 1200px;
    top: 960px;

    margin-bottom: 1em;

    background: rgba(79, 110, 146, 0.89);
    color: #ffffff;
    border-radius: 3px;

   
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