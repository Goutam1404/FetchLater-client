import API from "./index.ts";

export enum ContentType {
  YouTube = "youtube",
  Tweet = "tweet",
  Text = "text",
}

export interface ContentInputProps {
  title: string;
  description?: string;
  link?: string;
  contentFormat: ContentType;
  tags?: [];
}

export const createContent = async ({
  title,
  description,
  link,
  contentFormat,
  tags,
}: ContentInputProps) => {
  console.log(title + " " + description + " " + link + " " + contentFormat);

  const res = await API.post("/content", {
    title,
    description,
    link,
    contentFormat,
    tags,
  });
  console.log(res.data);
  console.log(res.data.content);
};

export const getAllContent = async () => {
  try {
    const res = await API.get("/content");
    console.log(res.data);
    console.log(res.data.content);

    return res.data.content;
  } catch (error) {}
};

export const getContent = async ({ contentId }: { contentId: string }) => {
  try {
    const res = await API.get(`/content/${contentId}`);
    console.log(res.data);
    console.log(res.data.content);

    return res.data.content;
  } catch (error) {}
};

export const deleteContent = async ({ contentId }: { contentId: string }) => {
  try {
    const res = await API.delete(`/content/${contentId}`);
    console.log(res.data);
    // console.log(res.data.content);

    // return res.data.content;
  } catch (error) {}
};

export const shareContent = async ({ contentId }: { contentId: string }) => {
  try {
    const res = await API.post(`/content/share/${contentId}`);
    console.log(res.data);
    console.log(res.data.link);

    return res.data.link;
  } catch (error) {}
};

export const getSharedContent = async ({
  userId,
  token,
}: {
  userId: string;
  token: string;
}) => {
  try {
    const res = await API.post(`/content/share/${userId}/${token}`);
    console.log(res.data);
    console.log(res.data.sharedData);

    return res.data.sharedData;
  } catch (error) {}
};

export const toggleShare = async ({ contentId }: { contentId: string }) => {
  try {
    const res = await API.patch(`/content/share/${contentId}`);
    console.log(res.data);
    console.log(res.data.updatedContent);

    // return res.data.content;
  } catch (error) {}
};
