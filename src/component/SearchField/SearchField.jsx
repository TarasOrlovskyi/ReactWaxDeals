import s from './SearchField.module.css';

const SearchField = (props) => {
  let onChangeSearchField = (event) => {
    props.updateSearchField(event.target.value);
  };
  return (
    <form action="search" method="GET">
      <label className={s.search}>
        <input className={s.search__input} type="text" name="matcher"
               onChange={onChangeSearchField}
               placeholder="Search by artist or title..."
               value={props.searchFieldValue}
               required/>
        <input type="submit" value="" className={s.search__button}/>
      </label>
    </form>
  );
};

export default SearchField;