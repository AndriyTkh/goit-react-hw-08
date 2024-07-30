/* import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList"; */
import { useDispatch, useSelector } from "react-redux";
/* import { selectError, selectLoading } from "../../redux/selectors"; */
import { useEffect, lazy } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { Routes, Route } from "react-router-dom";
import { RestrictedRoute } from "../RestrictedRoute";
import { PrivateRoute } from "../PrivateRoute";
import { Layout } from "../Layout";

const HomePage = lazy(() => import("../../pages/HomePage"));
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../../pages/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage"));

export default function App() {
  const dispatch = useDispatch();
  /* const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError); */

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  /* return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {isLoading && !isError && <div>Waiting for server to respond...</div>}
    </div>
  ); */

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Routes>
    </Layout>
  );
}
