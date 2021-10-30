
import {Container} from './styled.js';
import { useEffect, useState } from 'react';


export default function EditarProduto(props) {
  const [show, setShow] = useState(false);


  useEffect(() => {
    setShow(props.options.show);
  }, [props.options.show])
  
  
  function hide(e) {
    if(e.currentTarget !== e.target ) 
      return;

    props.options.show = false;
    setShow(false);
  }

  
  return (
    <Container show={show} onClick={hide}>
        <div className="content">
          {props.children}
        </div>
    </Container>
  )
}