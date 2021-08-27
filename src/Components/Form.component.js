import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "./CustomHook/form.custom";

const RegistrationFrom = () => {
  //state for each one of them
  //adding a custom hook
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    rePassword: "",
  });
  // const [firstName, setFirstname] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");
  // const [rePassword, setRePassword] = useState("");

  //-- add functionality --\\
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e, "REGISTRATION FORM HAS BEEN SUBMITED samphey jeda");
  };

  return (
    <div className="container">
      <h3 style={{ textAlign: "center" }}> REGISTER</h3>
      <form onSubmit={handleFormSubmit} className="add-form form-control">
        <label>First Name:</label>
        <input
          required
          type="text"
          name="firstname"
          placeholder="first name"
          value={values.firstName}
          onChange={handleChange}
        />
        <label>Last Name: </label>
        <input
          required
          type="text"
          name="lastname"
          placeholder="last name"
          value={values.lastName}
          onChange={handleChange}
        />
        <label>Email: </label>
        <input
          required
          type="email"
          name="email"
          placeholder="Email@email.co"
          value={values.email}
          onChange={handleChange}
        />
        <label>Password: </label>
        <input
          required
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />
        <label>Password: </label>
        <input
          required
          type="password"
          name="rePassword"
          placeholder="Password"
          value={values.rePassword}
          onChange={handleChange}
        />

        <input type="submit" className="btn" />
      </form>
      <footer>
        <h3>Have an Acc? </h3>
        <Link to="/">Login</Link>
      </footer>
    </div>
  );
};

export default RegistrationFrom;
