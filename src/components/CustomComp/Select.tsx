import IOption from "../../ts/Option";
import { Controller } from "react-hook-form";

type Props = {
  control: any;
  options: IOption[];
  name: string;
};

const Select = ({ control, name, options }: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <select
          onChange={(e) => onChange(e.target.value)}
          className="border-2 border-gray-300 py-3 px-4 rounded-md"
          value={value}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    />
  );
};

export default Select;
