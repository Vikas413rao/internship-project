import { useDispatch, useSelector } from 'react-redux';
import { toggleDraftcolumn} from '../featureSlice';
export default function useCustomizecolumns(onApply) {
    const dispatch = useDispatch();
    const draftColumns = useSelector(state => state.feature.draftColumns);
    const handleToggle = (key) => {
        dispatch(toggleDraftcolumn(key))
    }
    const handleApply = () =>{
       onApply(draftColumns);
    }

  return {
draftColumns,
handleToggle,
handleApply
  };
}
