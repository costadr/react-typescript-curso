import { useCallback, useMemo, useRef, useState } from "react";
import { InputLogin } from "./components/inputLogin";

export const Login = () => {
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailLength = useMemo(() => {
    return email.length * 1000;
  }, [email.length]);
  
  const handleEntrar = useCallback(() => {
      console.log(email)
      console.log(password)
      if (inputPasswordRef.current !== null){
        inputPasswordRef.current.focus()
      }
  }, [email, password]);
  
  return (
    <div>
      <form action="">
        <p>Quantidade de caracteres no email: {emailLength}</p>
        <InputLogin 
          label="Email"
          value={password}
          onChange={newValue => setPassword(newValue)}
        />

        <InputLogin 
          type="password"
          label="Senha"
          value={email}
          onChange={newValue => setEmail(newValue)} 
          onPressEnter={() => inputPasswordRef.current?.focus()}
        />

        {/* <label>
          <span>Senha</span>
          <input
            ref={inputPasswordRef} 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
          />
        </label> */}

        <button type="button" onClick={handleEntrar}>
          Entrar
        </button>
      </form>
    </div>
  )
}