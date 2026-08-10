import { useState } from "react";
import Button from "./components/Button";
import { PlusIcons } from "./icons/PlusIcons";
import Card from "./components/Card";
import ShareIcons from "./icons/ShareIcons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex items-center justify-between">
        <Button
          variant="primary"
          size="sm"
          text="Primary sm"
          startIcon={<PlusIcons size="sm" />}
          onClick={() => {}}
        />
        <Button
          variant="primary"
          size="md"
          text="Primary md"
          startIcon={<PlusIcons size="md" />}
          onClick={() => {}}
        />
        <Button
          variant="secondary"
          size="lg"
          text="Secondary lg"
          startIcon={<PlusIcons size="lg" />}
          onClick={() => {}}
        />
        <Button
          variant="secondary"
          size="sm"
          text="Secondary sm "
          startIcon={<ShareIcons size="sm"/>}
          onClick={() => {}}
        />
        <Button
          variant="secondary"
          size="md"
          text="Secondary md "
          startIcon={<ShareIcons size="md"/>}
          onClick={() => {}}
        />
        <Button
          variant="secondary"
          size="lg"
          text="Secondary lg "
          startIcon={<ShareIcons size="lg"/>}
          onClick={() => {}}
        />
      </div>
      <div className="m-2 flex gap-2 flex-wrap justify-center md:justify-start">
        <Card
          title="Headind"
          description="nothing to be done"
          buttons={
            <Button
              variant="secondary"
              size="sm"
            
              startIcon={<ShareIcons size="sm" />}
              onClick={() => {}}
            />
          }
        />
        <Card
          title="Headind"
          description="nothing to be done"
          buttons={
            <Button
              variant="secondary"
              size="sm"
            
              startIcon={<ShareIcons size="sm" />}
              onClick={() => {}}
            />
          }
        />
        <Card
          title="Headind"
          description="nothing to be done"
          buttons={
            <Button
              variant="secondary"
              size="sm"
            
              startIcon={<ShareIcons size="sm" />}
              onClick={() => {}}
            />
          }
        />
      </div>
    </>
  );
}

export default App;
