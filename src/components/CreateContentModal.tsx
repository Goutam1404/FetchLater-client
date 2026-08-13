import { useRef, useState } from "react";
import CloseIcon from "../icons/CloseIcon";
import Button from "./Button";
import Input from "./Input";
import { ContentType, createContent } from "../api/Content.api";
import type { addContentProps } from "../pages/Home";

// have to create a method which will return input values

export interface CreateContentProps {
  isOpen: boolean;
  addContent: (props: addContentProps) => void;
  onClose: () => void;
}

function CreateContentModal({
  isOpen,
  onClose,
  addContent,
}: CreateContentProps) {
  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
  const [contentFormat, setContentFormat] = useState<ContentType>(
    ContentType.YouTube
  );
  const [description, setDescription] = useState("");

  const submitContent = () => {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    addContent({ title, link, contentFormat, description });
    onClose();
  };

  return (
    <div>
      {isOpen && (
        <div className="w-screen h-screen bg-slate-500/60 fixed top-0 left-0 flex items-center justify-center z-50">
          <div className="mx-5 bg-white p-4 rounded-lg shadow-xl w-full max-w-md flex flex-col gap-4">
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
                ref={titleRef}
                placeholder="Enter title"
              />
              <Input
                type="text"
                onChange={() => {}}
                ref={linkRef}
                placeholder="Enter link"
              />
              <textarea
                rows={4}
                value={description}
                placeholder="Enter content/description..."
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                className="w-full px-3 py-2 text-sm text-slate-900 placeholder-slate-400 border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>
            {/* contentFormat Buttons */}
            <div className="flex justify-start gap-2 md:gap-5">
              <Button
                variant={contentFormat === "youtube" ? "primary" : "secondary"}
                size="sm"
                text="Youtube"
                onClick={() => setContentFormat(ContentType.YouTube)}
              />
              <Button
                variant={contentFormat === "tweet" ? "primary" : "secondary"}
                size="sm"
                text="X"
                onClick={() => setContentFormat(ContentType.Tweet)}
              />
              <Button
                variant={contentFormat === "text" ? "primary" : "secondary"}
                size="sm"
                text="Text"
                onClick={() => setContentFormat(ContentType.Text)}
              />
            </div>
            {/* Footer */}
            <div className="flex justify-end gap-2">
              <Button
                variant="primary"
                size="md"
                text="Submit"
                onClick={submitContent}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateContentModal;
