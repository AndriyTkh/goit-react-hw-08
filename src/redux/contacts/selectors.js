import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, searchWord) => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1
    );
  }
);
