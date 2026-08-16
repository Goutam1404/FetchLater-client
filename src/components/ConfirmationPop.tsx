import Button from "./Button";

interface ConfimationPopProps {
  confirm: boolean;
  confirmationText: string;
  onClose: () => void;
  confirmationClick: () => void;
}

function ConfirmationPop({
  confirm,
  confirmationText,
  onClose,
  confirmationClick,
}: ConfimationPopProps) {
  return (
    <div>
      {confirm && (
        <div className="w-screen h-screen bg-slate-500/60 fixed top-0 left-0 flex items-center justify-center z-50">
          <div className="mx-5 bg-white pt-4 rounded-lg shadow-xl w-full max-w-72 flex flex-col text-center gap-4">
            <h3 className="text-lg mt-2 text-slate-900">{confirmationText}</h3>
            <div className="flex justify-end gap-2 border-t-2 border-gray-200 py-2 px-2 ">
              <Button
                variant="secondary"
                size="md"
                text="No"
                // startIcon={<CloseIcon size="md" />}
                onClick={onClose}
              />
              <Button
                variant="primary"
                size="md"
                text="Yes"
                // startIcon={<CloseIcon size="md" />}
                onClick={() => {
                  confirmationClick();
                  onClose();
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ConfirmationPop;
