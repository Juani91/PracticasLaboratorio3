import Login from "./components/Login/Login"

function App() {

  const validateUserName = (valorHijo) => {

    if (valorHijo.includes('o') || valorHijo.includes('O')) {
      alert('Por favor, ¡Ingrese nombres de usuario sin la letra "o" u "O"!');
    } else if (valorHijo === "") {
      alert('Usuario inválido para registrarse!')
    }else{
      alert('Usuario registrado con éxito!')
    }

  }

  return (
    <>
      <div>
        <Login validation={validateUserName} />
      </div>
    </>
  )
}

export default App
