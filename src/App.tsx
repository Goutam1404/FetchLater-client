import { useState } from "react";
import Button from "./components/ui/Button";
import { PlusIcons } from "./icons/PlusIcons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex items-center justify-between">
        <Button
          variant="primary"
          size="sm"
          text="Primary sm"
          startIcon={<PlusIcons size="sm"/>}
          onClick={() => {}}
        />
        <Button
          variant="primary"
          size="md"
          text="Primary md"
          startIcon={<PlusIcons size="md"/>}
          onClick={() => {}}
          />
        <Button
          variant="secondary"
          size="lg"
          text="Secondary lg"
          startIcon={<PlusIcons size="lg"/>}
          onClick={() => {}}
        />
        <Button
          variant="secondary"
          size="sm"
          text="Secondary sm "
          onClick={() => {}}
        />
      </div>
    </>
  );
}

export default App;
