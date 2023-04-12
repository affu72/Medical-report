import { getInputClassName } from "../../ts/Contants";
import { Controller } from "react-hook-form";
import FormError from "./FormError";

interface PropInput {
  name: string;
  label?: string;
  control: any;
  placeholder?: string;
  type?: string;
  id?: string;
  className?: string;
}

const InputRHF = ({
  id,
  name,
  label,
  control,
  placeholder,
  className,

  type = "text",
}: PropInput) => {
  return (
    <div>
      {label || <label className="font-semibold">{label}</label>}

      <Controller
        rules={{ required: "This field is required" }}
        control={control}
        name={name}
        defaultValue={""}
        render={({
          field: { onChange, onBlur, value },
          formState: { errors },
        }) => {
          return (
            <>
              <input
                onChange={(e) => onChange(e.target.value)}
                className={getInputClassName(className)}
                placeholder={placeholder}
                type={type}
                value={value}
              />

              <FormError errors={errors} name={name} />
            </>
          );
        }}
      />
    </div>
  );
};

export default InputRHF;
