import { useRef, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { loginUser } from "../api/User.api";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();
  const onSubmit = async () => {
    setDisable(true);
    try {
      const email = emailRef.current?.value;
      const password = passwordRef.current?.value;
      await loginUser({ email, password });
      setDisable(true);
      navigate("/");
    } catch (error) {
      alert("Error in login");
      setDisable(false);
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="p-4 bg-gray-200 mb-4 flex flex-col gap-4 w-80 md:min-w-md rounded-md">
        <div className="flex flex-col items-center justify-center mb-2">
          <h2 className="text-3xl font-bold text-gray-700 mb-2">Signin</h2>
          <p className="text-xl text-gray-700/75">
            Welcome to <b>FetchLater</b>
          </p>
        </div>
        {/* Input */}
        <div className="flex flex-col gap-4 my-4">
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

export default SignIn;
