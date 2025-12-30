import type { CheckBoxProps } from "../types/CheckBoxProps";

const Toggle = ({ className = "", ...rest }: CheckBoxProps) => {
  return (
    <label className="inline-flex cursor-pointer">
      <input
        type="checkbox"
        className={`sr-only peer ${className}`}
        {...rest}
      />

      <span
        className="
          w-5 h-5
          border border-gray-400 rounded
          bg-white
          flex items-center justify-center
          transition
          peer-checked:bg-cyan-500 peer-checked:border-cyan-500
          after:content-['✓']
          after:text-white after:text-sm after:font-bold
          after:opacity-0 peer-checked:after:opacity-100
        "
      />
    </label>
  );
};

export default Toggle;
