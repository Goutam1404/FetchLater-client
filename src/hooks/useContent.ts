import { useEffect, useState } from "react";
import { getAllContent } from "../api/Content.api";
import type { Content } from "../pages/Home";

export function useContent(isChange: boolean) {
  const [contents, setContents] = useState<Content[]>([]);

  useEffect(() => {
    const getContent = async () => {
      try {
        const res = await getAllContent();
        setContents(res);
      } catch (error) {}
    };
    console.log("In the loop");

    getContent();
  }, [isChange]);
  return contents;
}

export default useContent;
