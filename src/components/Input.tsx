export interface InputProps {
  type: string;
  placeholder: string;
  ref: any;
  onChange?: () => void;
}

function Input({ type, placeholder, ref }: InputProps) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        ref={ref}
        className=" min-w-full px-4 py-2 border border-slate-500 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-700 focus:border-transparent"
      />
    </div>
  );
}

export default Input;
