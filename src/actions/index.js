export const SEARCH_TEXT_CHANGE = 'SEARCH_TEXT_CHANGE';
export const searchTextChange = (searchText) => {
  return {
    type: SEARCH_TEXT_CHANGE,
    searchText
  };
};