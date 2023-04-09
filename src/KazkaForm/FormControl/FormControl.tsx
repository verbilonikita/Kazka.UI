import React, { useMemo } from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";

interface IFormControl {
  children: React.ReactElement;
  name: string;
  inputOptions?: RegisterOptions;
}

const FormControl: React.FC<IFormControl> = ({
  children,
  name: inputName,
  inputOptions = {},
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { onChange, onBlur, name, ref } = register(inputName, inputOptions);

  const isInvalid = useMemo(() => errors[name], [errors]);

  return React.cloneElement(children, {
    onChange,
    onBlur,
    name,
    ref,
    isInvalid,
  });
};

export default FormControl;
