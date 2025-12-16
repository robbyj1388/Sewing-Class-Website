import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; password: string }>();

  // Use to navigate user to new page
  const navigate = useNavigate();

  const database = {
    email: "robbyj@gmail.com",
    password: "pass",
  }

  // Check login data (to do)
  const onSubmit = (data: { email: string; password: string; }) => {
    // Check if data is eqaul to database
    if (data.email === database.email && data.password === database.password){
      alert("Login Successful");
      navigate("./Registration");
    }else{
      alert("Login Failed");
    }
  };

  return (
    <>
      <h2>Login Form</h2>

      <form className="App" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          {...register("email", { required: true })}
          placeholder="Email"
        />
        {errors.email && <span style={{ color: "red" }}>*Email* is mandatory</span>}
        <br></br>
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="Password"
        />
        {errors.password && <span style={{ color: "red" }}>*Password* is mandatory</span>}
        <br></br>
        <input type="submit"/> 
        <button type="button" onClick={() => navigate("./registration")}>Register</button>
      </form>
    </>
  );
}

export default Login;
