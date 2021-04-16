import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';


const Mensaje=styled.p `

background-color:rgba(127,224,237);
padding:1rem;
margin-top:2rem;
text-align:center;



`
const Texto=styled.p `

color:#00838f;
padding:1rem;
text-transform:uppercase;
font-weight:bold;
margin:0;



`
const Result=styled.div `

background-color:rgba(127,224,237);
padding:.5rem;
margin-top:1rem;
text-align:center;
border:1px solid #26c6da;



`
const Resultado = ({cotizacion}) => {
    return ( 
(cotizacion ===0)
?<Mensaje>Elige marca,año y tipo de seguro</Mensaje>
 :
 (
     <Result><Texto>El total es : $ {cotizacion}</Texto> </Result>

 ) 
    )
}
Resultado.propTypes={
    cotizacion:PropTypes.number.isRequired
 }
export default Resultado;