import { FormikConfig, FormikValues } from 'formik';

interface FormikStepperProps extends FormikConfig<FormikValues> {
  language: string;
  children: React.ReactNode;
}

export default FormikStepperProps;
