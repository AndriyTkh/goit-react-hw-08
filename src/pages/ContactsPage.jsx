import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../redux/contacts/selectors";

export default function ContactsPage() {
  const isLoading = useSelector(selectIsLoading);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      <div>{isLoading && "Request in progress..."}</div>
    </div>
  );
}
