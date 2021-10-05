import searchFieldStyle from './SearchField.module.css';
import {NavLink} from "react-router-dom";

const SearchField = ({searchFieldValue, updateSearchField, loadSearchResult}) => {

  let onChangeSearchField = (event) => {
    updateSearchField(event.target.value);
  };
  return (
    <form onSubmit={(e) => e.preventDefault()} className={searchFieldStyle.search__form}>
      <label className={searchFieldStyle.search}>
        <input className={searchFieldStyle.search__input} type="text" name="matcher"
               onChange={onChangeSearchField}
               placeholder="Search by artist or title..."
               value={searchFieldValue}
               required/>
        <NavLink to={'/search?matcher=' + searchFieldValue}>
          <input type="submit" value="" className={searchFieldStyle.search__button}
                 onClick={() => loadSearchResult(searchFieldValue)}/>
        </NavLink>
      </label>
    </form>
  );
};

export default SearchField;