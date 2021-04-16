import React,{useState} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import styled from '@emotion/styled';


const Container=styled.div`
max-width:600px;
margin:0 auto;
`;
const ContainerForm=styled.div`
background-color:#fff;
padding:3rem;
`;



function App() {

  const [resumen,guardarResumen]=useState({ // se guarda el resultado del formulario 
    cotizacion:0,
    datos:{
      marca:'',
      year:'',
      plan:''
    }
  }) ;
  //extraer datos 
  const  {datos,cotizacion }=resumen
  return (
  <Container>
     <Header 
 titulo="Cotizador de seguros"
 />
 <ContainerForm>
   <Formulario
   guardarResumen={guardarResumen} />
   <Resumen 
   datos={datos}/>
   <Resultado
   cotizacion={cotizacion} />

 </ContainerForm>

  </Container>




  );
}

export default App;
