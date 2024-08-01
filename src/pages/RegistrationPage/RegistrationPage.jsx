import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationPage.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";

const initialValues = {
  username: "",
  email: "",
  password: "",
};

const validatiomSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(16, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .required("Required")
    .test("email-validation, Email is invalid!", (value) => {
      var reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      return reg.test(value);
    }),
  password: Yup.string()
    .min(7, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
});

export default function RegistrationPage() {
  const dispatch = useDispatch();
  const usernameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(
      register({
        name: values.username,
        email: values.email,
        password: values.password,
      })
    );

    actions.resetForm();
  };

  return (
    <div>
      <h1>Registration page!</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validatiomSchema}
      >
        <Form className={css.form}>
          <div className={css.fieldBox}>
            <label htmlFor={usernameFieldId} className={css.label}>
              Username
            </label>
            <Field type="text" name="username" id={usernameFieldId}></Field>
            <ErrorMessage
              className={css.error}
              name="username"
              component="spam"
            />
          </div>

          <div className={css.fieldBox}>
            <label htmlFor={emailFieldId} className={css.label}>
              Email
            </label>
            <Field type="email" name="email" id={emailFieldId}></Field>
            <ErrorMessage className={css.error} name="email" component="span" />
          </div>

          <div className={css.fieldBox}>
            <label htmlFor={passwordFieldId} className={css.label}>
              Password
            </label>
            <Field type="password" name="password" id={passwordFieldId}></Field>
            <ErrorMessage
              className={css.error}
              name="password"
              component="span"
            />
          </div>

          <button type="submit" className={css.submitBtn}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}
