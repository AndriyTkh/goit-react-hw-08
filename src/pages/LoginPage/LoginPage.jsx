import { Formik, Form, Field } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginPage.module.css";

const initialValues = {
  email: "",
  password: "",
};

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

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <label htmlFor={emailFieldId} className={css.label}>
            Email
          </label>
          <Field type="email" name="email" id={emailFieldId}></Field>
          <label htmlFor={passwordFieldId} className={css.label}>
            Password
          </label>
          <Field type="password" name="password" id={passwordFieldId}></Field>

          <button type="submit" className={css.submitBtn}>
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
}
