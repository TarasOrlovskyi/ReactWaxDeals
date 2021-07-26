import s from './SearchField.module.css';
import {NavLink} from "react-router-dom";

const SearchField = (props) => {
  let onChangeSearchField = (event) => {
    props.updateSearchField(event.target.value);
  };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label className={s.search}>
        <input className={s.search__input} type="text" name="matcher"
               onChange={onChangeSearchField}
               placeholder="Search by artist or title..."
               value={props.searchFieldValue}
               required/>
        <NavLink to={'/search?matcher=' + props.searchFieldValue}>
          <input type="submit" value="" className={s.search__button}
                 onClick={() => props.loadSearchResult(props.searchFieldValue)}/>
        </NavLink>
      </label>
    </form>
  );
};

export default SearchField;