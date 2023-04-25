import React, { useEffect } from "react";
import {
  FieldErrorsImpl,
  FormProvider,
  useForm,
  UseFormSetError,
} from "react-hook-form";
// styles
import "./Kazka-Form.scss";

interface IKazkaForm {
  children: React.ReactNode;
  defaultValues?: any;
  onSubmit: (values: any, setError: UseFormSetError<any>) => void;
  onError?: (errors: Partial<FieldErrorsImpl<any>>) => void;
}

const KazkaForm: React.FC<IKazkaForm> = ({
  children,
  onSubmit,
  defaultValues,
  onError,
}) => {
  const methods = useForm({ defaultValues });
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const values = methods.getValues();
    const dataValid = await methods.trigger(Object.keys(values) as never[]);
    if (dataValid) {
      onSubmit(values, methods.setError);
    }
  };

  useEffect(() => {
    if (onError) {
      onError(methods.formState.errors);
    }
  }, [methods.formState.errors]);

  return (
    <div className="customForm">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit}>{children}</form>
      </FormProvider>
    </div>
  );
};

export default KazkaForm;
