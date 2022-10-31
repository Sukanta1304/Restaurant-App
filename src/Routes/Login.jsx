import { useContext } from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate} from "react-router-dom";
import { AppContext} from "../Context/AppContext";

function tryLogin(email,password){
  return fetch("https://reqres.in/api/login",
 {
    method: "POST", 
    body: JSON.stringify({email,password}),
    headers: {
        'Content-Type': 'application/json',
    }
})
}
function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const {token,isAuth,setToken,setIsAuth} = useContext(AppContext);
const navigate= useNavigate();
//console.log(email,password);

const handleLogin=(event)=>{
  event.preventDefault();
  tryLogin(email,password)
  .then((res)=>res.json())
  .then((res)=>{
    //console.log(res);
    if(res.token){
      setToken(res.token);
      setIsAuth(true);
      navigate("/dashboard")
    }
    
  })

  //console.log(state);

}


  return (
    <div className="login-page">
      <form className="form" data-testid="login-form" onSubmit={handleLogin}>
        <div>
          <label>
            <input data-testid="email-input" 
            type="email" placeholder="email"
            onChange={(e)=>setEmail(e.target.value)}
             />
          </label>
        </div>
        <div>
          <label>
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button data-testid="form-submit" type="submit" disabled={isAuth==true}>
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
export default Login;
