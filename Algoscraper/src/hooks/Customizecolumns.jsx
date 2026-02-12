import { useEffect, useState } from 'react';

export default function useCustomizecolumns(intialSelected,onApply) {
    const [draftColumns , setDraftColumns] = useState(intialSelected);

    useEffect(()=>{
        setDraftColumns(intialSelected);

    },[intialSelected]);

    const handleToggle = (key)=>{
        setDraftColumns(prev =>
            prev.includes(key)
            ? prev.filter(item => item !== key)
            :[...prev,key]
        )
    };
    const handleApply = () =>{
        onApply(draftColumns);
    }

  return {
draftColumns,
handleToggle,
handleApply
  };
}
