import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationPage.module.css";
import { Formik, Form, Field } from "formik";
import { useId } from "react";

const initialValues = {
  username: "",
  email: "",
  password: "",
};

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

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <label htmlFor={usernameFieldId} className={css.label}>
            Username
          </label>
          <Field type="text" name="username" id={usernameFieldId}></Field>
          <label htmlFor={emailFieldId} className={css.label}>
            Email
          </label>
          <Field type="email" name="email" id={emailFieldId}></Field>
          <label htmlFor={passwordFieldId} className={css.label}>
            Password
          </label>
          <Field type="password" name="password" id={passwordFieldId}></Field>

          <button type="submit" className={css.submitBtn}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}
