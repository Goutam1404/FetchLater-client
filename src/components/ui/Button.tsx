import type { ReactElement } from "react";

export interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  onClick: () => void;
}

function Button(props: ButtonProps) {
  const variantClasses = {
    primary:
      "bg-purple-600/80 text-white hover:bg-purple-600 focus:ring-sky-500",
    secondary:
      "bg-purple-400 text-purple-500 text-gray-800 hover:bg-slate-400/40 focus:ring-sky-500",
  };
  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-2.5 text-base",
  };
  const combinedClasses = `${variantClasses[props.variant]} ${
    sizeClasses[props.size]
  }`;
  return (
    <div>
      <button
        className={`${combinedClasses} flex items-center gap-2 transition-all duration-200 rounded-md cursor-pointer`}
      >
        {props.startIcon} {props.text}
      </button>
    </div>
  );
}

export default Button;
