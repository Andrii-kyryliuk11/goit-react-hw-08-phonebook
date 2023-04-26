import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <input
      className={css.input}
      type="text"
      name="filter"
      onChange={e => dispatch(setFilter(e.currentTarget.value))}
    />
  );
};
