import { useState } from 'react';

export default function Featuredialog() {
    const [openStartdialog,setopenStartdialog]=useState(false);
    const [openSessiondialog,setopenSessiondialog]=useState(false);

    const pagelist = [{value:'Page List' ,label:'Page List'}];

    const handleopenStartDialog = () => setopenStartdialog(true);
     const closealldialog =() =>{
        setopenStartdialog(false);
        setopenSessiondialog(false);
     };
     const startsession =() =>{
        setopenStartdialog(false);
        setopenSessiondialog(true);
     }
     const clearsession = () =>{
        setopenStartdialog(true);
        setopenSessiondialog(false);
     }
  return {
    
      openStartdialog,
      openSessiondialog,
      pagelist,
      closealldialog,
      startsession,
      clearsession,
      handleopenStartDialog
    
  };
}
