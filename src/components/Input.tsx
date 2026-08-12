export interface InputProps {
  type: string;
  placeholder: string;
  onChange: () => void;
  value?: string;
}

function Input({ type, placeholder, onChange, value }: InputProps) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className=" min-w-full px-4 py-2 border border-slate-500 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-700 focus:border-transparent"
      />
    </div>
  );
}

export default Input;
