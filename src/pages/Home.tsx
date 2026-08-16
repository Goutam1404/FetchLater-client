import { useState } from "react";
import Button from "../components/Button";
import { LockIcons, UnLockIcons } from "../icons/LockIcons";
import ShareIcons from "../icons/ShareIcons";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import CreateContentModal from "../components/CreateContentModal";
import useContent from "../hooks/useContent";
import DeleteIcon from "../icons/DeleteIcon";

import {
  createContent,
  deleteContent,
  shareContent,
  toggleShare,
  type ContentType,
} from "../api/Content.api";
import ConfirmationPop from "../components/ConfirmationPop";
import { logOutUser } from "../api/User.api";
import { useNavigate } from "react-router-dom";

export interface addContentProps {
  title: string;
  link: string;
  contentFormat: ContentType;
  description: string;
}

function Home() {
  const navigate = useNavigate();
  const [selectedContentId, setSelectedContentId] = useState<string | null>(
    null
  );
  const [isChange, setIsChange] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [popOpen, setPopOpen] = useState(false);
  const [onConfirmAction, setOnConfirmAction] = useState(() => () => {});
  const contents = useContent(isChange);
  // console.log(contents);

  const logOut = async () => {
    setPopOpen(true);
    setOnConfirmAction(confirmHandleLogout);
  };

  const confirmHandleLogout = async () => {
    try {
      if (popOpen) {
        await logOutUser();
        setPopOpen(!popOpen);
        setIsChange(!isChange);
        navigate("/signin");
        // alert("Loggin out");
      }
    } catch (error) {
      console.error("Failed logout:", error);
      alert("Failed to logout");
    }
  };

  const addContent = async ({
    title,
    link,
    contentFormat,
    description,
  }: addContentProps) => {
    try {
      console.log(title + " " + contentFormat);

      await createContent({ title, link, contentFormat, description });
      setIsChange(!isChange);
    } catch (error) {}
  };

  const onDelete = async (contentId: string) => {
    setSelectedContentId(contentId);
    setPopOpen(true);
    setOnConfirmAction(handleConfirmDelete);
  };

  const handleConfirmDelete = async () => {
    if (!selectedContentId) return;

    try {
      if (popOpen) {
        await deleteContent({ contentId: selectedContentId });
        setIsChange(!isChange);
        setPopOpen(false); // Close the popup after success
        setSelectedContentId(null); // Clear the stored ID
      }
    } catch (error) {
      console.error("Deletion failed:", error);
    }
  };

  const onShare = async (contentId: string) => {
    try {
      await shareContent({ contentId });
    } catch (error) {}
  };

  const toggleIsShare = async (contentId: string) => {
    try {
      await toggleShare({ contentId });
      setIsChange(!isChange);
    } catch (error) {}
  };

  return (
    <div className="bg-gray-100 h-screen transition-all flex">
      <CreateContentModal
        isOpen={modalOpen}
        addContent={addContent}
        onClose={() => setModalOpen(false)}
      />
      <ConfirmationPop
        confirm={popOpen}
        confirmationText="Confirm to delete this content ?"
        onClose={() => {
          setPopOpen(false);
          setOnConfirmAction(() => {});
        }}
        confirmationClick={onConfirmAction}
      />
      <div>
        <SideBar logOutClick={logOut} />
      </div>
      <div className="flex flex-col ml-1 md:ml-4 w-72 md:w-full ">
        <Navbar addOpen={() => setModalOpen(true)} />
        <div className="  md:px-2 flex gap-2 md:gap-4 flex-wrap justify-center md:justify-start">
          {contents &&
            contents.map((content) => (
              <Card
                key={content._id}
                title={content.title}
                type={content.contentFormat}
                link={content.link}
                description={content.description}
                status={
                  <Button
                    variant="tertiary"
                    size="sm"
                    startIcon={
                      content.isShared ? (
                        <LockIcons size="sm" />
                      ) : (
                        <UnLockIcons size="sm" />
                      )
                    }
                    onClick={() => toggleIsShare(content._id)}
                  />
                }
                share={
                  <Button
                    variant="tertiary"
                    size="sm"
                    disabled={content.isShared}
                    startIcon={<ShareIcons size="sm" />}
                    onClick={() => onShare(content._id)}
                  />
                }
                delete={
                  <Button
                    variant="tertiary"
                    size="sm"
                    startIcon={<DeleteIcon size="md" />}
                    onClick={() => onDelete(content._id)}
                  />
                }
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
