import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { InputAdornment, OutlinedInput } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <OutlinedInput
      type="text"
      name="filter"
      onChange={e => dispatch(setFilter(e.currentTarget.value))}
      startAdornment={
        <InputAdornment position="start">
          <FilterAltIcon />
        </InputAdornment>
      }
    />
  );
};
