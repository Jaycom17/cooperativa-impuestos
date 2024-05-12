import React from 'react';
import './MainPage.css';

function MainPage() {
    return (
        <div  className='contenedor'>
                <img className="logo" src="https://fernandocolmenares.co/wp-content/uploads/2020/08/U.CooperativaCol.png" alt="Logo" />
                <div className='contenedorIB'>
                    <input className= "campo" type="text" placeholder="Introduzca el código" />
                    <button className='boton'>Enviar</button>
                </div>
                <h3 className='texto'>Si no eres estudiante, dale click <a className='link' href=''>aqui</a> para crear un codigo</h3>
                
        </div>
    );
}

export default MainPage;
