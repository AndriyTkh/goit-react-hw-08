import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleleContact } from "../../redux/contactsOps";

export default function Contact({ data: { name, number, id } }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleleContact(id));
  };

  return (
    <>
      <ul className={css.bioList}>
        <li>
          <svg width="20" height="20">
            <use href="/src/symbol-defs.svg#icon-user"></use>
          </svg>
          <p>{name}</p>
        </li>
        <li>
          <svg width="20" height="20">
            <use href="/src/symbol-defs.svg#icon-phone"></use>
          </svg>
          <p>{number}</p>
        </li>
      </ul>
      <button
        type="button"
        className={css.deleteBtn}
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </>
  );
}
