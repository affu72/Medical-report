export const getInputClassName = (className: string = "") => {
  return `border-2 border-gray-300 py-2 px-4 w-full rounded-md ${className}`;
};

export const getErrorMsg = (name: string) => `${name} cannot be empty`;
