import { FormikConfig, FormikValues } from 'formik';

interface FormikStepProps
  // eslint-disable-next-line
  extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
  label: string;
}

export default FormikStepProps;
