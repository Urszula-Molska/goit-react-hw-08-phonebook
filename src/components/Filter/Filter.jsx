import { useDispatch } from 'react-redux';
import { addFilter } from '../../redux/Filter/filterSlice.js';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const setFilter = event => {
    const filter = event.target.value.toLowerCase().trim();
    dispatch(addFilter(filter));
  };

  return (
    <div className={css.section}>
      <h3 className={css.titleFilter}>Find contacts by name</h3>
      <input
        className={css.input}
        type="text"
        name="filter"
        placeholder="filter by name"
        onChange={setFilter}
      />
    </div>
  );
};
