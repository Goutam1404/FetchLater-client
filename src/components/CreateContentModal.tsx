import CloseIcon from "../icons/CloseIcon";
import Button from "./Button";
import Input from "./Input";

export interface CreateContentProps {
  isOpen: boolean;
  onClose: () => void;
}

function CreateContentModal({ isOpen, onClose }: CreateContentProps) {
  return (
    <div>
      {isOpen && (
        <div className="w-screen h-screen bg-slate-500/60 fixed top-0 left-0 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-xl w-full max-w-md flex flex-col gap-4">
            <div className="flex justify-end">
              <Button
                variant="tertiary"
                size="md"
                startIcon={<CloseIcon size="md" />}
                onClick={onClose}
              />
            </div>

            {/* Body */}
            <div className="flex flex-col gap-2">
              <Input
                type="text"
                onChange={() => {}}
                placeholder="Enter title"
              />
              <Input type="text" onChange={() => {}} placeholder="Enter link" />
              <textarea
                rows={4}
                placeholder="Enter content/description..."
                onChange={() => {}}
                className="w-full px-3 py-2 text-sm text-slate-900 placeholder-slate-400 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-2">
              <Button
                variant="primary"
                size="md"
                text="Submit"
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateContentModal;
