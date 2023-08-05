import { useEffect, useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // if (window.confirm('Você é uma IA?')) {
    //   console.log('Sim')
    // } else {
    //   console.log('Não')
    // }
  }, []);

  useEffect(() => {
    console.log(password)
  }, [password]);
  
  useEffect(() => {
    console.log(email)
  }, [email]);
  
  const handleEntrar = () => {
    // console.log(email)
    // console.log(password)
  }
  
  return (
    <div>
      <form action="">
        <label>
          <span>Email</span>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
        </label>

        <label>
          <span>Senha</span>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>

        <button type="button" onClick={handleEntrar}>
          Entrar
        </button>
      </form>
    </div>
  )
}