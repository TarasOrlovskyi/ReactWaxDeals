import s from './SearchField.module.css';

const SearchField = () => {
  return (
    <form action="search" method="GET">
      <label className={s.search}>
        <input className={s.search__input} type="text" name="matcher"
               placeholder="Search by artist or title..."
               required />
        <input type="submit" value="" className={s.search__button} />
      </label>
    </form>
  );
}

export default SearchField;