import css from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };

  const filterValue = useSelector(selectNameFilter);

  return (
    <div className={css.searchBox}>
      <p>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        value={filterValue}
        onChange={handleChange}
      />
    </div>
  );
}
