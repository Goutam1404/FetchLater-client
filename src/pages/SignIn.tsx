import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

function SignIn() {
  const [disable, setDisable] = useState(false);
  function onSubmit() {
    setDisable(true);
  }
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
          <Input
            type="text"
            placeholder="Enter you email"
            onChange={() => {}}
          />
          <Input
            type="password"
            placeholder="Enter you password"
            onChange={() => {}}
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
