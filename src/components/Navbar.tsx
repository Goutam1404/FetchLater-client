import { PlusIcons } from "../icons/PlusIcons";
import ShareIcons from "../icons/ShareIcons";
import Button from "./Button";

function Navbar({ addOpen }) {
  return (
    <div className="py-4 px-2 md:px-4 flex items-center justify-end">
      {/* Buttons */}
      <div className="flex items-center gap-2 justify-end">
        <Button
          variant="secondary"
          size="md"
          text="Share"
          startIcon={<ShareIcons size="md" />}
          disabled={true}
          onClick={() => {}}
        />
        <Button
          variant="primary"
          size="md"
          text="Add Content"
          startIcon={<PlusIcons size="md" />}
          onClick={addOpen}
        />
      </div>
    </div>
  );
}

export default Navbar;
