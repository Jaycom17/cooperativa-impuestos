import TeacherNavbar from '../../components/TeacherNavBar/TeacherNavbar';

function ResetPasswordTeacher(){
    return(
        <>
            <TeacherNavbar />
            <main>
              <section>
                <h1>Cambiar Contraseña</h1>
                <form action="">
                  <label htmlFor="previuspassword">Contraseña Anterior</label>
                  <input type="password" id="previuspassword" name="previuspassword" required />
                  <label htmlFor="password">Nueva Contraseña</label>
                  <input type="password" id="password" name="password" required />
                  <label htmlFor="confirmPassword">Confirmar Contraseña</label>
                  <input type="password" id="confirmPassword" name="confirmPassword" required />
                  <button type="submit">Cambiar Contraseña</button>
                </form>
              </section>
            </main>
        </>
    )
}

export default ResetPasswordTeacher;