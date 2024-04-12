
import React from 'react';
import '../styles/LoginPage.css';

function LoginPage() {
    return (
        <div className="principal">
            <div className="container">
                <div className='imagen'>
                    <img className="logo" src="https://fernandocolmenares.co/wp-content/uploads/2020/08/U.CooperativaCol.png" alt="Logo" />
                </div>
                <form className='formulario'>
                    <h1 className='Login'>Login</h1>
                    <input className='usuario' type="text" id="username" placeholder='Usuario' name="username" required /><br /><br />
                    <input className='contraseña' type="password" id="password" placeholder='Contraseña' name="password" required /><br /><br />
                    <button className='enviarL'>Ingresar</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;