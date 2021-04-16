
// obtiene la diferencia de años

export function obtenerDiferenciaYear(year){
    return new Date().getFullYear()-year
}
//calcula el total a pagar segun marca

export function calcularMarca (marca){
    let incremento;

    switch (marca){
        case'europeo':
        incremento=1.30;
        break;
        case'americano':
        incremento=1.15;
        break;
        case'asiatico':
        incremento=1.05;
        break;


    }
    return incremento
}
// calcula el tipo de plan 
export function obtenerPlan (plan){
    return (plan === "basico") ?1.20 :1.50
}
//primer letra mayuscula


export function primer(texto){
return texto.charAt(0).toUpperCase() + texto.slice(1)
}