import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; password: string; confirmPassword: string }>();

  // Use to navigate user to new page
  const navigate = useNavigate();

  const database = {
    email: "robbyj@gmail.com",
    password: "pass",
  }

  // Check registration data
  const onSubmit = (data: { password: string; confirmPassword: any; email: string; }) => {
    // if passwords do not match
    if (data.password !== data.confirmPassword){
      alert("Passwords do not match");
      return;
    }
    // Save registration data to database 
    database.email = data.email;
    database.password = data.password;
    alert("Registration Successful");
    navigate("/");
  };

  return (
    <>
      <h2>Registration Form</h2>

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
        <input
          type="password"
          {...register("confirmPassword", { required: true })}
          placeholder="Confirm Password"
        />
        {errors.confirmPassword && <span style={{ color: "red" }}>*Confirm Password* is mandatory</span>}
        <br></br>
        <input type="submit"/>
        <button type="button" onClick={() => navigate("/")}>Back</button>
      </form>
    </>
  );
}

export default Registration;
