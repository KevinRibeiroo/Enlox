
import styled from 'styled-components';

const Container = styled.div`

display: flex;
    flex-direction: row;
    max-width: 57.7em;
    position: absolute;
    .new-student-box {
        display: flex;
        flex-direction: column;
        background-color: white;
        box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
        padding: 2em;
        height: 35em;
            
    }
   
    .bar-new-student {
        border: 3px solid #BCBF50;
        border-radius: .5em;
        margin-right: .4em;
        background-color: #BCBF50;
    }
    .text-new-student {
        display: flex;
        flex-direction: row;
        font-size: 32px;
    }
    
    .text-new-student div {
        font-weight: bolder;
    }
    .input-new-student {
        display: flex;
        flex-direction: row;
        padding-top: 2.4em;
    }

    
    .agp-input {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 18px;
    }
    .input {
        margin-top: .5em;
        margin-bottom: .5em;
    }
    .input-left {
        display: flex;
        flex-direction: column;
        margin-right: em;
        height: 1em;
        
    }
    .input-right {
        display: flex;
        flex-direction: column-reverse;
        align-self: flex-end; 
        margin-bottom: 1em;
        margin-top: 27em;
        margin-left: 14em;
        height: 1em;       
    }
    
    .box img{
        width: 151px;
        height: 153.05px;
        left: 1079px;
        top: 389.39px;
    }

    .box {
        background-color: #FFF5DA;
        border-radius: 5px;
        border: 1px solid #A8A8A8;        
      
        width: 398px;
        height: 200px;
        left: 1071px;
        top: 363px;
    }

    .upload{
        display: flex;
        flex-direction: row;
    }

    .x{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    .icon{
        margin-right: 3em;
        margin-left: 1em;
    }

    input[type='file'] {
        color:transparent; 
        width:116px;
        margin-right: 2.5em;
    }

    .agp-input input {
        width: 209px;
        height: 36px;
        background: #FFFFFF;
    
        box-sizing: border-box;
        border-radius: 5px;
        padding-left: .5em;
    }



    .name-product {
        font-size: 18px;
        color: #615858;
        width: 5.5em;
        padding-left: 1em;
        font-weight: 800;
    }
    
    .arraste{
        font-size: 14px;
        color: #615858;
        width: 14em;
        padding-left: 1em;
        font-weight: 800;
    }

    .ou{
        font-size: 14px;
        color: #615858;
        width: 5.5em;
        padding-left: 1em;
        font-weight: 800;
    }

    .desc {
        font-size: 18px;
        color: #615858;
        width: 5.5em;
        padding-left: 1em;
        font-weight: 800;
        margin-right: 1em;
        
    
    }
    
    .agp-img {
    display:flex;
    flex-direction: row;
    margin-right: 12em;
    margin-left: 8em;
    margin-bottom: 17em;
    }
  
    .img-product {
        font-size: 18px;
        color: #615858;
        width: 6em;
        font-weight: 800;
        align-self: flex-start;
        margin-right: 0.5em;
    }
    
    .text{
        display: flex;
        flex-direction: row;
        align-self: center;
        margin-top: 1em;
        justify-content: center;
        margin-right: 12em;
        margin-left: 0em;
       
    }
    
    textarea{
        width: 750px;
        height: 154px;
        border-radius: 5px;
        top: 440px;
        left: 556px;
        resize: none
    }
    
    .number-product {
        font-size: 18px;
        color: #615858;
        width: 5.5em; 
        font-weight: 800;
    }
    
    .button-create {
        align-self: flex-end;
        justify-self: flex-end;
        padding-bottom: 1.5em;
        padding-top: 1.5em;
    }
    .button-create  button {
        width: 106px;
        height: 36px;
        background: #A8A8A8;
        border-radius: 44px;
        border: none;
        color: white;
        font-size: 14px;
        margin-left: 2em;
        font-weight: bold;
    }
    
    .body-right-box {
        background-color: #F5F5F5;
       
        height: 100%;
        padding: 3em;
        
        margin-bottom: 0em;
        margin-right: 0em;
    }
   
    button {
        cursor: pointer;
    }
    .button-create button:hover {
        background-color: #BCBF50;
        transition: 2s;
    }
   
`

export{Container};