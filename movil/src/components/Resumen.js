import React from 'react';
import styled from '@emotion/styled';
import {primer} from '../helper';
import PropTypes from 'prop-types';




const ContenedoResu=styled.div  `
padding:1rem;
text-align:center;
background-color:#0083f;
color:#fff;
margin-top:1rem;



`


const Resumen = ({datos}) => {

    // extraigo datos 
    const {marca,year,plan}=datos

    if(marca === '' ||  year ==='' || plan ==='') return null // si no hay nada en el form input el h2 no se muestra

    
    return (  
        <ContenedoResu><h2> Resumen de Cotizacion </h2>
        <ul>
            <li>Marca:{primer(marca)}</li>
            <li>Plan:{primer(plan)}</li>
            <li>Año del auto :{primer(year)}</li>
        </ul>
        </ContenedoResu>
    );
}
Resumen.propTypes={
    datos:PropTypes.object.isRequired
 }
 
export default Resumen;