import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginPage.module.css";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const validatiomSchema = Yup.object().shape({
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

export default function LoginPage() {
  const dispatch = useDispatch();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    )
      .unwrap()
      .then(() => {
        console.log("login success");
      })
      .catch(() => {
        console.log("login error");
      });

    actions.resetForm();
  };

  return (
    <div>
      <h1>Login page!</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validatiomSchema}
      >
        <Form className={css.form}>
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
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
}
