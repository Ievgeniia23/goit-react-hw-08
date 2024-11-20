import { createSelector } from 'reselect';

// Селектор для отримання списку контактів
export const selectContacts = state => state.contacts.items;

// Селектор для отримання фільтру по імені
export const selectNameFilter = state => state.filters.name;

// Селектор для отримання відфільтрованих контактів
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    const lowerCaseFilter = filter.toLowerCase().trim();
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(lowerCaseFilter) ||
        contact.number.includes(lowerCaseFilter)
    );
  }
);
