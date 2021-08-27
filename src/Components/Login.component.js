import { useState } from "react";
import {useAuth} from '../contexts/AuthContext'
import { Link } from "react-router-dom";

const Login = () => {
  //state for each
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("LOGIN FORM HAS BEEN SUMITED", e);
  };

  return (
    <div className="container">
      <h3 style={{ textAlign: "center" }}> Login</h3>
      <form onSubmit={handleLoginSubmit} className="add-form form-control">
        <label>User Name: </label>
        <input
          required
          type="text"
          placeholder="name/id"
          value={text}
          onChange={(e) => setText(e.target.value, console.log(e.target.value))}
        />
        <label>Password: </label>
        <input
          required
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value, console.log(e.target.value))
          }
        />

        <input type="submit" className="btn" />
      </form>
      <footer>
        <h3>Don't have an account? </h3>
        <div>
          <Link to="/register">Register</Link>
        </div>
          <Link to="nav">NavBar</Link>
        <div>
          <Link to='/fileuploader'>FileUploader</Link>
        </div>
      </footer>
    </div>
  );
};

export default Login 