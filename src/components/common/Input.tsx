interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

function Input({ label, value, onChange, placeholder }: InputProps) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
      <span>{label}</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100"
      />
    </label>
  );
}

export default Input;
