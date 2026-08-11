import type { ReactElement } from "react";

export interface ButtonProps {
  variant: "primary" | "secondary" | "tertiary";
  size: "sm" | "md" | "lg";
  text?: string;
  disabled?: boolean;
  startIcon?: ReactElement;
  onClick: () => void;
}

function Button(props: ButtonProps) {
  const variantClasses = {
    primary:
      "bg-purple-600/80 text-white hover:enabled:bg-purple-600 focus:ring-sky-500 ",
    secondary:
      "bg-purple-400/50 text-purple-500 hover:enabled:bg-purple-400 focus:ring-sky-500 disabled:opacity-50",
    tertiary:
      " text-gray-700 hover:enabled:bg-gray-300 focus:ring-gray-500 disabled:opacity-50",
  };
  const sizeClasses = {
    sm: "px-2 py-0.5 md:px-2 md:py-1.5 text-xs rounded-lg",
    md: "px-3 py-1 md:px-4 md:py-2 text-sm rounded-md",
    lg: "px-4 py-1.5 md:px-5 md:py-2.5 text-base rounded-md",
  };
  const combinedClasses = `${variantClasses[props.variant]} ${
    sizeClasses[props.size]
  }`;
  return (
    <div>
      <button
        disabled={props.disabled}
        onClick={props.onClick}
        className={`${combinedClasses} flex items-center gap-1 md:gap-2 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed`}
      >
        {props.startIcon} {props.text && <span>{props.text}</span>}
      </button>
    </div>
  );
}

export default Button;
