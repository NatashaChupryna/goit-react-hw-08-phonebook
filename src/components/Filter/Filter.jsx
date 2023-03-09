import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/slice';
import { selectFilter } from 'redux/contacts/selectors';
import { Field, Label, Input } from './Filter.styled';

export function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = e => {
    const { value } = e.currentTarget;
    dispatch(setFilter(value));
  };

  return (
    <Field>
      <Label>Find contacts by name</Label>
      <Input type="text" value={filter} onChange={onChange} placeholder=" " />
    </Field>
  );
}
