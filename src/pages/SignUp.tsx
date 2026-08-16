import { useRef, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { registerUser } from "../api/User.api";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [disable, setDisable] = useState(false);
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onSubmit = async () => {
    try {
      const username = usernameRef.current?.value ?? "";
      const email = emailRef.current?.value ?? "";
      const password = passwordRef.current?.value ?? "";
      await registerUser({ username, email, password });
      setDisable(true);
      navigate("/signin");
    } catch (error) {
      alert("Error in registering");
      setDisable(false);
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="p-4 bg-gray-200 mb-4 flex flex-col gap-4 w-80 md:min-w-md rounded-md">
        <div className="flex flex-col items-center justify-center mb-2">
          <h2 className="text-3xl font-bold text-gray-700 mb-2">SignUp</h2>
          <p className="text-xl text-gray-700/75">
            Welcome to <b>FetchLater</b>
          </p>
        </div>
        {/* Input */}
        <div className="flex flex-col gap-4 my-4">
          <Input
            type="text"
            placeholder="Enter you username"
            ref={usernameRef}
          />
          <Input type="text" placeholder="Enter you email" ref={emailRef} />
          <Input
            type="password"
            placeholder="Enter you password"
            ref={passwordRef}
          />
        </div>
        {/* footer */}
        <div className="">
          <Button
            variant="primary"
            size="lg"
            text="Sign Up"
            onClick={onSubmit}
            disabled={disable}
          />
          <p>Forgot Password ?</p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
