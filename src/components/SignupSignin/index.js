import React, { useState } from "react";
import "./style.css";
import Input from "../Input";
import Button from "../Button";

function SignupSigninComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div className="signup-wrapper">
      <h2 className="title">
        Sign Up on <span style={{ color: "var(--theme" }}>MoneyMap</span>
      </h2>
      <form>
        <Input
          label={"Full Name"}
          state={name}
          setState={setName}
          placeholder={"Abc Xyz"}
        />
      </form>

      <form>
        <Input
          label={"Email"}
          state={email}
          setState={setEmail}
          placeholder={"abc@gmail.com"}
        />
      </form>

      <form>
        <Input
          label={"Password"}
          state={password}
          setState={setPassword}
          placeholder={"Enter Your Password"}
        />
      </form>

      <form>
        <Input
          label={"Confirm Password"}
          state={confirmPassword}
          setState={setConfirmPassword}
          placeholder={"Confirm Your Password"}
        />
        <Button text={"SignUp using Email & Password"}/>
        <p style={{textAlign:"center", margin:0}}>  or </p>
        <Button text={"SignUp using Google"} blue={true}/>
      </form>
    </div>
  );
}

export default SignupSigninComponent;
