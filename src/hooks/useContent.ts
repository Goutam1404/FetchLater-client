import { useEffect, useState } from "react";
import { getAllContent } from "../api/Content.api";

export function useContent(isChange: boolean) {
  const [contents, setContent] = useState();

  useEffect(() => {
    const getContent = async () => {
      try {
        const res = await getAllContent();
        setContent(res);
      } catch (error) {}
    };
    console.log("In the loop");

    getContent();
  }, [isChange]);
  return contents;
}

export default useContent;
