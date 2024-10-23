import React, { useState } from "react";
import "./style.css";
import Input from "../Input";
import Button from "../Button";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

function SignupSigninComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function signupWithEmail() {
    setLoading(true);
    console.log("Name", name);
    console.log("email", email);
    console.log("password", password);
    console.log("confirmpassword", confirmPassword);

    if (name != "" && email != "" && password != "" && confirmPassword != "") {
      if (password == confirmPassword) {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log("User>>>", user);
            toast.success("User Created");
            setLoading(false);
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            createDoc(user);
            //

            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage);
            setLoading(false);
            // ..
          });
      } else {
        toast.error("Password & Confrim Password doesn't match!");
        setLoading(false);
      }
    } else {
      toast.error("All fields are mandatory");
      setLoading(false);
    }
  }
  //

  function createDoc(user) {}

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
          type="email"
          label={"Email"}
          state={email}
          setState={setEmail}
          placeholder={"abc@gmail.com"}
        />
      </form>

      <form>
        <Input
          type="password"
          label={"Password"}
          state={password}
          setState={setPassword}
          placeholder={"Enter Your Password"}
        />
      </form>

      <form>
        <Input
          type="password"
          label={"Confirm Password"}
          state={confirmPassword}
          setState={setConfirmPassword}
          placeholder={"Confirm Your Password"}
        />
        <Button
          disabled={loading}
          text={loading ? "Loading...." : "SignUp using Email & Password"}
          onClick={signupWithEmail}
        />
        <p style={{ textAlign: "center", margin: 0 }}> or </p>
        <Button
          text={loading ? "Loading...." : "SignUp using Google"}
          blue={true}
        />
      </form>
    </div>
  );
}

export default SignupSigninComponent;
