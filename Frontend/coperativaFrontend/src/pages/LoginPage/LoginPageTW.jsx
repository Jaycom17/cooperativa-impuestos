const LoginPageTW = () => {
    return( 
        <main className="flex flex-col max-w-md  mx-auto items-center min-h-screen place-content-center">
            <img src="https://fernandocolmenares.co/wp-content/uploads/2020/08/U.CooperativaCol.png" alt="logo universidad cooperativa" />
            <section className="p-6 w-96">
                <form className="flex flex-col items-center bg-[#385075] rounded-md">
                    <h1 className="text-2xl text-white bg-[#385075] mt-4">Iniciar sesión</h1>
                    <input type="text" placeholder="Usuario" name="username" required className="w-[90%] rounded-[3px] border-solid border-unicoop border-[1px] my-3 p-2 text-unicoop-white"/>
                    <input type="password" placeholder="Contraseña" name="password" required
                    className="w-[90%] rounded-[3px] border-solid border-unicoop border-[1px] my-3 p-2"/>
                    <button className="bg-[#404142] text-unicoop-white w-[90%] p-2 rounded-md my-4 hover:bg-[#0056b3] focus:ring-2 transition-colors duration-200 ease-in">Ingresar</button>
                </form>
            </section>
        </main>
    )
}

export default LoginPageTW;
