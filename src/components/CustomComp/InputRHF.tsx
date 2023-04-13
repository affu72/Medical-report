import { getInputClassName } from "../../ts/Contants";
import { Controller, useFormContext } from "react-hook-form";
import FormError from "./FormError";

interface PropInput {
  name: string;
  label?: string | null;
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
  const {
    formState: { touchedFields },
  } = useFormContext();

  let rules = {};

  if (type === "number") {
    rules = {
      required: "this field is required",
      minLength: {
        value: 10,
        message: "Enter a valid number",
      },
      maxLength: {
        value: 10,
        message: "Number Should 10 digits",
      },
    };
  } else {
    rules = {
      required: "This field is required",
    };
  }

  console.log(rules);

  return (
    <>
      {label ? (
        <div className={`basis-1/2 h-20 mb-1`}>
          <label className="font-[600]">{label}</label>
          <Controller
            rules={rules}
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

                  {touchedFields.name || (
                    <FormError errors={errors} name={name} />
                  )}
                </>
              );
            }}
          />
        </div>
      ) : (
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
              <div>
                <input
                  onChange={(e) => onChange(e.target.value)}
                  className={getInputClassName(className)}
                  placeholder={placeholder}
                  type={type}
                  value={value}
                />

                <FormError errors={errors} name={name} />
              </div>
            );
          }}
        />
      )}
    </>
  );
};

export default InputRHF;
