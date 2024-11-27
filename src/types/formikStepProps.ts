import { FormikConfig, FormikValues } from 'formik';

interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
  label: string;
}

export default FormikStepProps;
