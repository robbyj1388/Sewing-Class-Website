import React from "react";
import { redirect } from "react-router";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const {
      register,
      handleSubmit,
      formState: { errors },
  } = useForm();

  // Use to navigate user to new page
  const navigate = useNavigate();

  // Check login data (to do)
  const onSubmit = (data) => {
    const userData = data.email;
    navigate("./Registration");
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
      </form>
    </>
  );
}

export default Login;
