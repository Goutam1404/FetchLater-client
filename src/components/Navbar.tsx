import LogoIcon from "../icons/LogoIcon";
import { PlusIcons } from "../icons/PlusIcons";
import ShareIcons from "../icons/ShareIcons";
import Button from "./Button";

function Navbar() {
  return (
    <div className="md:p-4 p-2 flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-sans font-bold text-purple-600 flex items-center gap-1">
          <LogoIcon size="xl" />
          Fetch Later
        </h2>
      </div>
      <div className="flex items-center gap-2 justify-end">
        <Button
          variant="secondary"
          size="md"
          text="Share"
          startIcon={<ShareIcons size="md" />}
          onClick={() => {}}
        />
        <Button
          variant="primary"
          size="md"
          text="Add Content"
          startIcon={<PlusIcons size="md" />}
          onClick={() => {}}
        />
      </div>
    </div>
  );
}

export default Navbar;
