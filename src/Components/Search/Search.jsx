import "./search.css";
export const Search = ({ searchText, setSearchText }) => {
  return (
    <input
      value={searchText}
      className="Search  m-1 outline-none "
      type="search"
      placeholder="Search Rooms"
      onChange={(e) => setSearchText(e.target.value)}
    />
  );
};
