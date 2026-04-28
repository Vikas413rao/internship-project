import { useDispatch, useSelector } from 'react-redux';
import { toggleDraftcolumn, setselectcolumns } from '../featureSlice';

export default function useCustomizecolumns(onApply, page) {
  const dispatch = useDispatch();


  const draftColumns = useSelector(
    state => state.feature.draftColumns[page]
  );


  const handleToggle = (key) => {
    dispatch(toggleDraftcolumn({ page, key }));
  };

  const handleApply = () => {
    dispatch(setselectcolumns({ page, columns: draftColumns }));
    onApply(draftColumns);
  };

  return {
    draftColumns,
    handleToggle,
    handleApply
  };
}