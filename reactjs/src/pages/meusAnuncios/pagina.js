/*
import styled from 'styled-components'

const Container = styled.div`
  display: flex;

  .page {
    display: flex;
    justify-content: center;
    align-items: center;

    color: #747474;
    border: 1px solid #c4c4c4;
    border-left: none;
    width: 3em;
    height: 2.5em;
    margin-bottom: 2em;
    
    cursor: pointer;
    user-select: none;
  }

  .page:nth-child(1) {
    border-left: 1px solid #c4c4c4;
  }

  .page:nth-child(${props => props.paginaAtual + 1}) {
    font-weight: bold;
  }

  .page:hover {
    background-color: #f5f5f5;
  }
`

export default function Paginas(props) {

    function getPages() {
      let paginas = [];
      for (let i = 1; i <= props.totalPaginas; i++) {
        paginas.push(i);
      }
      return paginas;
    }
  
    function irPara(pagina) {
      props.onPageChange(pagina);
    }
  
    function anterior() {
      if (props.pagina === 1)
        props.onPageChange(props.totalPaginas);  
      else 
        props.onPageChange(props.pagina-1);
    }
    
    function proximo() {
      if (props.pagina === props.totalPaginas)
        props.onPageChange(1);
      else
        props.onPageChange(props.pagina+1);
    }
  
  
    return (
      <Container paginaAtual={props.pagina}>
        <div className="page" onClick={anterior}>
            {"<"}
        </div>
        {getPages().map(p => 
          <div className="page" onClick={() => irPara(p)}>
            {p}
          </div>
        )}
        <div className="page" onClick={proximo}>
            {">"}
        </div>
      </Container>
    )
  }*/