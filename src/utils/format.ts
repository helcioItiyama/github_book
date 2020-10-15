export const searchFormat = (search: string): string => {
  const formattedSearch = search.replace(/\s/g, '');
  return formattedSearch;
};
