import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/selectors";
import { useSelector } from "react-redux";

export default function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {visibleContacts.map((contact) => {
        return (
          <li key={contact.id} className={css.contactBox}>
            <Contact data={contact} />
          </li>
        );
      })}
    </ul>
  );
}
