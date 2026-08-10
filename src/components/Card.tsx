import { type ReactElement } from "react";

export interface CardProps {
  title: string;
  description?: string;
  buttons: ReactElement;
}

function Card(props: CardProps) {
  return (
    <div className="m-2 min-w-72 min-h-80 p-2 bg-purple-400 text-purple-500 rounded-lg border border-slate-400 shadow-md hover:shadow-gray-500/50 transition-all duration-200">
      <div className="flex items-center justify-between pb-2 border-b border-slate-400">
        <h2 className="text-xl ">{props.title}</h2>
        <span>{props.buttons}</span>
      </div>
      <div>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
