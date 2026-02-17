import { createSlice } from '@reduxjs/toolkit';

const defaultColumns = ['contentName','controlType','Xpath']

export const AllColumns = [
    {key:'contentName',label:'Content Name',default:true},
    {key:'controlType',label:'Control Type',default:true},
    {key:'Xpath',label:'Xpath',default:true},
    {key:'pageName',label:'Page Name', default:false},
    {key:'controlValue',label:'Control Value',default:false},
    {key:'appUrl',label:'App URL',default:false },
    {key:'featureName',label:'Feature Name',default:false},
    {key:'nodeName',label:'Node Name',default:false},
  ];

const initialState = {
    loading: false,
  url: '',
  isValidurl: false,
  draftColumns: defaultColumns,
  mainDialogOpen: false,
  checkDialog:false,
  sessionDialogOpen: false,
  sessionType: null,
   customDialogOpen: false,
   featureDialogOpen:false,
    featureSessionOpen:false,
    sessionType:null,
    currentPage:1,
    rowsperPage:4,
    rows:[],
    selectedColumns:defaultColumns,
    selectcolumns:AllColumns.filter(col =>col.default).map(col =>col.key),
    nextOpen:false,
};

const featureSlice = createSlice({
  name: 'feature',
  initialState,
 reducers: {
  addRow:(state)=>{
    const newId=state.rows.length +1;
    state.rows.push({id:newId});

    const totalPages = Math.ceil(state.rows.length / state.rowsperPage);
    state.currentPage=totalPages;
  },
  deleteRow:(state,action) =>{
    const idDelete = action.payload;
    state.rows=state.rows.filter(row=>row.id != idDelete);
    const totalPages = Math.ceil(state.rows.length/state.rowsperPage);
    if (state.currentPage > totalPages && totalPages > 0){
      state.currentPage = totalPages;
    }
    if(state.rows.length === 0){
      state.currentPage = 1;
    }
  },
    openFeaturedialog(state){
        state.featureDialogOpen=true;
    },
    closeFeaturedialog(state){
        state.featureDialogOpen=false;
    },
    startSession(state){
        state.featureDialogOpen=false;
        state.featureSessionOpen=true;
        state.sessionType='start';
    },
    clearSession(state){
        state.featureDialogOpen=false;
        state.featureSessionOpen=true;
        state.sessionType='clear'
    },
    closeSession(state){
        state.featureSessionOpen=false;
        state.sessionType=null;
    },
  setLoading(state, action) {
    state.loading = action.payload;
  },
  setUrl(state, action) {
    state.url = action.payload;
  },
  setValidUrl(state, action) {
    state.isValidurl = action.payload;
  },

  openMainDialog(state) {
    state.mainDialogOpen = true;
  },
  closeMainDialog(state) {
    state.mainDialogOpen = false;
  },

  openCustomdialog(state){
    state.customDialogOpen=true;
  },
  closeCustomdialog(state){
    state.customDialogOpen=false;
  },
  setPage:(state,action)=>{
    state.currentPage=action.payload
  },
  resetPage:(state)=>{
    state.currentPage=1
  },
  toggleDraftcolumn:(state,action) =>{
    const key=action.payload;
    if(state.draftColumns.includes(key)){
      state.draftColumns = state.draftColumns.filter(item => item !== key);
    }
    else{
      state.draftColumns.push(key);
    }
  },
  openCheckDialog(state){
    state.checkDialog=true;
  },
  closecheckDialog(state){
    state.checkDialog=false;
  },
  setselectcolumns:(state,action) =>{state.selectcolumns = action.payload},
  setnextopen : (state,action) =>{state.nextOpen = action.payload}

},
});

export const {
    openDialog,
    closeDialog,
  setLoading,
  setUrl,
  setValidUrl,
  setselectcolumns,
  setnextopen,
  toggleDraftcolumn,
  openMainDialog,
  closeMainDialog,
openFeaturedialog,
closeFeaturedialog,
startSession,
clearSession,
closeSession,
  openCustomdialog,
  closeCustomdialog,
  setPage,
  resetPage,
  addRow,
  deleteRow,
  openCheckDialog,
  closecheckDialog,
} = featureSlice.actions;
export default featureSlice.reducer;
