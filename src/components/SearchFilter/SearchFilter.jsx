import { Search, Filter } from "../";
export const SearchFilter = () => {
  return (
    <div className="search-filter flex border-2 grey-red-300 justify-between m-2 my-5">
      <Search />
      <Filter />
    </div>
  );
};
