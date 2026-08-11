import { type ReactElement } from "react";
import Button from "./Button";
import DeleteIcon from "../icons/DeleteIcon";

export interface CardProps {
  title: string;
  type: string;
  link?: string;
  description?: string;
  status?: ReactElement;
  buttons: ReactElement;
}

function Card(props: CardProps) {
  const getYouTubeEmbedUrl = (url: string) => {
    if (!url) return "";

    // Robust regex covering shorts, desktop, mobile, and live URLs
    const regex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
    const match = url.match(regex);
    // console.log(match ? match[1] : "");

    // Return the secure, formatted embed URL if an ID is found
    return match ? `https://youtube.com/embed/${match[1]}` : "";
  };

  return (
    <div className="m-2 min-w-72 max-w-80 md:min-w-60 md:max-w-72 max-h-fit px-2 py-1 bg-purple-300 text-purple-500 rounded-lg border border-slate-400 shadow-md hover:shadow-gray-600 transition-all duration-200">
      {/* Card header */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-400">
        <h2 className="text-xl ">{props.title}</h2>
        <span className="flex flex-row items-center justify-end">
          {props.status} {props.buttons}
        </span>
      </div>
      {/* Main content */}
      <div className="min-h-fit">
        {props.type == "tweet" && (
          <blockquote className="twitter-tweet">
            <a href={props.link?.replace("x.com", "twitter.com")}></a>
          </blockquote>
        )}
        {props.type == "youtube" && (
          <iframe
            className="rounded-md w-full h-40"
            src={props.link && getYouTubeEmbedUrl(props.link)}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;  web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
        <p className="line-clamp-1 py-2">
          {props.description}
        </p>
      </div>
      {/* Card footer */}
      <div className="flex  justify-between">
        <span className="cursor-pointer hover:text-purple-600">
          Read more...
        </span>
        <Button
          variant="tertiary"
          size="sm"
          startIcon={<DeleteIcon size="md" />}
          onClick={() => {}}
        />
      </div>
    </div>
  );
}

export default Card;

