import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const validation = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too short!")
    .max(30, "Too long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short!")
    .max(30, "Too long!")
    .required("Required"),
});

const init = {
  username: "",
  number: "",
};

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ name: values.username, number: values.number }));
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={validation}
        initialValues={init}
      >
        <Form className={css.form}>
          <div className={css.inputBox}>
            <label htmlFor={nameId}>Name</label>
            <Field
              className={css.field}
              type="text"
              name="username"
              id={nameId}
            />
            <ErrorMessage
              className={css.error}
              name="username"
              component="span"
            />
          </div>

          <div className={css.inputBox}>
            <label htmlFor={numberId}>Number</label>
            <Field
              className={css.field}
              type="tel"
              name="number"
              id={numberId}
            />
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </div>

          <button type="submit" className={css.submitBtn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
