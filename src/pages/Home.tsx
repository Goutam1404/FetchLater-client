import { useState } from "react";
import Button from "../components/Button";
import { LockIcons, UnLockIcons } from "../icons/LockIcons";
import ShareIcons from "../icons/ShareIcons";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";

function Home() {
  const [lock, setLock] = useState(false);
  const toggleLock = () => {
    setLock(!lock);
  };
  return (
    <div className="bg-gray-100 h-screen">
      <Navbar />
      <div className="flex">
        <SideBar />
        <div className="m-2 px-2 flex gap-2 flex-wrap justify-center md:justify-start">
          <Card
            title="Heading"
            type="text"
            description="nothing to be done"
            status={
              <Button
                variant="tertiary"
                size="sm"
                startIcon={
                  lock ? <LockIcons size="sm" /> : <UnLockIcons size="sm" />
                }
                onClick={toggleLock}
              />
            }
            buttons={
              <Button
                variant="tertiary"
                size="sm"
                disabled={lock}
                startIcon={<ShareIcons size="sm" />}
                onClick={() => {}}
              />
            }
          />
          <Card
            title="Heading"
            type="tweet"
            link="https://x.com/gautam70477/status/1993015499773690146"
            description="nothing to be done"
            status={
              <Button
                variant="tertiary"
                size="sm"
                startIcon={
                  lock ? <LockIcons size="sm" /> : <UnLockIcons size="sm" />
                }
                onClick={toggleLock}
              />
            }
            buttons={
              <Button
                variant="tertiary"
                size="sm"
                disabled={lock}
                startIcon={<ShareIcons size="sm" />}
                onClick={() => {}}
              />
            }
          />
          <Card
            title="Youtube video"
            type="youtube"
            link="https://youtu.be/LpRr7PQfIGY?si=L-wyT-9FFRQhQNdS"
            description="nothing to be done"
            status={
              <Button
                variant="tertiary"
                size="sm"
                startIcon={
                  lock ? <LockIcons size="sm" /> : <UnLockIcons size="sm" />
                }
                onClick={toggleLock}
              />
            }
            buttons={
              <Button
                variant="tertiary"
                size="sm"
                disabled={lock}
                startIcon={<ShareIcons size="sm" />}
                onClick={() => {}}
              />
            }
          />
          <Card
            title="Network video"
            type="youtube"
            link="https://youtu.be/wGjyuDvvRx4?si=Sa8Sty4wa_MATxsa"
            description="nothing to be done"
            status={
              <Button
                variant="tertiary"
                size="sm"
                startIcon={
                  lock ? <LockIcons size="sm" /> : <UnLockIcons size="sm" />
                }
                onClick={toggleLock}
              />
            }
            buttons={
              <Button
                variant="tertiary"
                size="sm"
                disabled={lock}
                startIcon={<ShareIcons size="sm" />}
                onClick={() => {}}
              />
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
