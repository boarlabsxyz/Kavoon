import { useState } from 'react';

import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import HowDiscoverPicker from 'src/components/cartPage/howDiscoverPicker';
import ContactsMessengerPicker from 'src/components/common/contactsMessengerPicker';

import useRx from 'src/hooks/useRx';
import telegramApi from 'src/services/telegram-bot-api';
import lang from 'src/i18n/lang';
import { getLocalPrice } from 'src/helpers/priceLocalization';

import st from './CartOrderForm.module.css';

function CartOrderForm({ vm, language }) {
  const totalSum = getLocalPrice(useRx(vm.totalSum), language);
  const count = useRx(vm.count);
  const orderedProducts = useRx(vm.orderedProducts);

  const [messenger, onMessengerChange] = useState(null);
  const [howDiscover, setHowDiscover] = useState(null);

  const submitOrderForm = async (values, actions) => {
    const { username, numTel, country, comment } = values;
    const res = await telegramApi.sendOrderMessage({
      senderName: username,
      senderTel: numTel,
      messenger,
      country,
      comment,
      desiredColor: '',
      orderedProducts,
      totalSum,
      language,
      howDiscover,
    });

    if (res.status === 'success') {
      vm.makeOrder(res.status);
      actions.resetForm();
    }
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required(lang('PleaseFill', language)),
    numTel: Yup.string().required(lang('PleaseFill', language)),
    country: Yup.string().required(lang('PleaseFill', language)),
  });

  return (
    <>
      {count !== 0 && (
        <Formik
          initialValues={{
            username: '',
            numTel: '',
            country: '',
            comment: '',
          }}
          onSubmit={submitOrderForm}
          validationSchema={validationSchema}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
            } = props;

            const isUserNameError = errors.username && touched.username;
            const isCountryError = errors.country && touched.country;
            const isNumTelError = errors.numTel && touched.numTel;

            const disabledCondition =
              isSubmitting ||
              values.username === '' ||
              values.numTel === '' ||
              values.country === '' ||
              errors.username ||
              errors.numTel ||
              errors.country;

            return (
              <form
                onSubmit={handleSubmit}
                className={st.wrapper}
                data-cy="order-form"
              >
                <fieldset disabled={isSubmitting} className={st.fieldset}>
                  <legend className={st.legend}>
                    <h2 className={st.title}>{lang('PlaceOrder', language)}</h2>
                  </legend>
                  <p className={st.text}>{lang('LeaveContacts', language)}</p>
                  <div className={st.fields}>
                    <div className={st.row}>
                      <label
                        htmlFor="username"
                        className={st.requiredFieldLabel}
                      >
                        {lang('Name', language)}
                      </label>
                      <Field
                        id="username"
                        placeholder={lang('EnterName', language)}
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          isUserNameError
                            ? `${st.field} ${st.errorField}`
                            : st.field
                        }
                        data-cy="username"
                      />
                      {isUserNameError && (
                        <div className={st.errorFeedback}>
                          {errors.username}
                        </div>
                      )}
                    </div>

                    <div className={`${st.row}`}>
                      <ContactsMessengerPicker
                        language={language}
                        input={{
                          error: errors.numTel,
                          touched: touched.numTel,
                          onMessengerChange,
                        }}
                      />
                      {isNumTelError && (
                        <div className={st.errorFeedback}>{errors.numTel}</div>
                      )}
                    </div>

                    <div className={`${st.row} ${st.countryRow}`}>
                      <label
                        htmlFor="country"
                        className={st.requiredFieldLabel}
                      >
                        {lang('Country', language)}
                      </label>
                      <Field
                        id="country"
                        placeholder={lang('EnterCountry', language)}
                        value={values.country}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          isCountryError
                            ? `${st.field} ${st.errorField}`
                            : st.field
                        }
                        data-cy="country"
                      />
                      {isCountryError && (
                        <div className={st.errorFeedback}>{errors.country}</div>
                      )}
                    </div>
                    <div className={st.row}>
                      <label htmlFor="comment">
                        {lang('Comment', language)}
                      </label>
                      <Field
                        component="textarea"
                        rows="2"
                        id="comment"
                        placeholder={lang('EnterComment', language)}
                        value={values.comment}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`${st.field} ${st.commentField}`}
                        data-cy="comment"
                      />
                    </div>
                    <div className={st.row}>
                      <HowDiscoverPicker
                        language={language}
                        input={{
                          error: errors.howDiscover,
                          touched: touched.howDiscover,
                          setHowDiscover,
                        }}
                      />
                    </div>
                  </div>
                  <div className={st.row}>
                    <button
                      className={st.submitButton}
                      type="submit"
                      disabled={disabledCondition}
                    >
                      {lang('PlaceOrder', language)}
                    </button>
                  </div>
                </fieldset>
              </form>
            );
          }}
        </Formik>
      )}
    </>
  );
}
export default CartOrderForm;
