
import React, { useRef } from "react";

function Prestamos() {
    
    // const navigate = useNavigate();
    const montoRef = useRef(null);
    const mesesRef = useRef(null);
    const interesesRef = useRef(null);
    const tbodyRef = useRef(null);
    const tfootRef = useRef(null);
    const calcularCuota = function (e){

        e.preventDefault()

        let monto = parseFloat(montoRef.current.value);
        const meses = parseInt(mesesRef.current.value);
        const intereses = parseFloat(interesesRef.current.value);
    
     const completarTabla = document.querySelector('tbody');
     const Total = document.querySelector('tfoot');

        //reiniciar funcion//
    
        while(completarTabla.firstChild){
            completarTabla.removeChild(completarTabla.firstChild);
        }
        while(Total.firstChild){
            Total.removeChild(Total.firstChild)
        }
    
        
            //Formato fechas//
    
        
        let fechaActual = new Date();
        const año = fechaActual.getFullYear();
        const mes = fechaActual.getMonth() + 1; 
        const dia = fechaActual.getDate();
    
        let pagoIntereses=0, pagoCapital = 0, cuota = 0, totalDeIntereses = 0;
    
    
        //calculo de cuota, con metodo dde amortizacion frances//
    
        cuota = monto * (Math.pow(1+intereses/100, meses)*intereses/100)/(Math.pow(1+intereses/100, meses)-1);
    
        //lenado de la tabla//
    
        if(meses > 72) {
    
            alert('El plazo de meses es mas de lo permitido')
        } else 
    
        for(let i = 1; i <= 1; i++) {
    
            pagoIntereses = parseFloat(monto*(intereses/100));
            pagoCapital = cuota - pagoIntereses;
            monto = parseFloat(monto-pagoCapital);
            totalDeIntereses = totalDeIntereses + pagoIntereses
    
    
            
            //llevar los elementos creados a la tabla en el html//
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${dia}/${mes + 1}/${año}</td>
                <td>${cuota.toFixed(2)}</td>
                <td>${pagoIntereses.toFixed(2)}</td>
                
            `;
    
        
    
            completarTabla.appendChild(row)
    
            
           //calculo del total a pagar// //en caso de querer que se haga una tabla completa, poner esta parte del cogido fuera del bucle for//
           const ultimaFila = document.createElement('tr');
           ultimaFila.innerHTML = `
           <td>Total a pagar:</td>
           <td>${(cuota * meses).toFixed(2)}</td>
            `;
           Total.appendChild(ultimaFila)
     
    }
    
    }
    return ( 
        <>
     <h1 id="prestamoH1"> Simulador de Prestamos </h1>
        <form className="prestamoForm" onSubmit={calcularCuota}>

            <label htmlFor="monto">Monto a solicitar:</label>
            <input type="text" ref={montoRef} placeholder="Ingresar monto" required/>
            <br/>
            <label htmlFor="meses">Tiempo(maximo 72 meses):</label>
            <input type="text" ref={mesesRef} placeholder="Ingresar tiempo en meses"  required/>
            <br/>
            <label htmlFor="intereses">Ingresar el interes mensual del prestamo a solicitar:</label>
            <input type="text" ref={interesesRef} placeholder="Sin el simbolo de porcentaje" required/>
            <button type="submit" id="botonCalcular" >Calcular prestamo</button>

        </form>

        
        <br/>
            
        <table>
             <thead id="tabla">
                 <tr>
                   <th>Fecha</th>
                   <th>Cuota</th>
                   <th>Interés</th>
                 </tr>
             </thead>
             <tbody ref={tbodyRef}></tbody> 
             <tfoot ref={tfootRef}></tfoot> 

        </table>



      
        </>
   );
}

export default Prestamos;
