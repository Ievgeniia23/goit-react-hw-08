import { useDispatch, useSelector } from 'react-redux';
import { setNameFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';

import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = e => {
    dispatch(setNameFilter(e.target.value));
  };

  return (
    <div className={css.searchBoxWrapper}>
      <p className={css.SearchBoxText}>Find contacts by name</p>
      <input
        className={css.SearchBoxInput}
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search contacts"
      />
    </div>
  );
};

export default SearchBox;
