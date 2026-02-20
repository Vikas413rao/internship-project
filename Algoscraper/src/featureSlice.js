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
const tasks=[
  { id: 1, name: "Scenario_file_Name", progress: 0 },
    { id: 2, name: "Scenario_file_Name", progress: 0 },
    { id: 3, name: "Scenario_file_Name", progress: 0 },
];
const initialState = {
    open: false,
    progress:0,
    title:'Please Wait',
    message:'',
  url: '',
  isValidurl: false,
  onComplete:null,
  analyzedAt:null,
  showFinalReport:false,
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
  closingDialogopen:false,
  customicondialogopen:false,
  scenarioName:'',
  scenarioOutline:'',
  editdialogopen:false,
  resetrecordopen:false,
  settingopen:false,
  task:tasks,
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

  setUrl(state, action) {
    state.url = action.payload;
  },
  setValidUrl(state, action) {
    state.isValidurl = action.payload;
  },
  setAnalyzedat (state,action){
    state.analyzedAt = action.payload;
  },
  setShowfinalReport (state){
    state.showFinalReport=true;
  },
resetShowfinalReport (state){
  state.showFinalReport=false;
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
  setnextopen : (state,action) =>{state.nextOpen = action.payload},
  openLoader:(state,action)=>{
    state.open=true;
    state.progress=0;
    state.title=action.payload.title || 'Please Wait';
    state.message=action.payload.message || '';
    state.onComplete=action.payload.onComplete;
  },
  setProgress : (state,action)=>{
    state.progress = action.payload;
  },
  closeLoader : (state)=>{
    state.open=false;
    state.progress=0;
    state.title='Please Wait';
    state.message="";
    state.analyzedAt=Date.now();

  },
  resetPingcard : (state)=>{
    state.url='',
    state.isValidurl=false;
  },
  openclosingdialog:(state)=>{
    state.closingDialogopen=true;
  },
  closeClosingdialog:(state)=>{
    state.closingDialogopen=false;
  },
  opencustomicondialog:(state)=>{
    state.customicondialogopen=true;
  },
  closecustomicondialog:(state)=>{
    state.customicondialogopen=false;
  },
  setScenarioName:(state,action)=>{
    state.scenarioName=action.payload;
  },
  setScenarioOutline:(state,action)=>{
    state.scenarioOutline=action.payload;
  },
  clearScenario:(state)=>{
    state.scenarioName='';
    state.scenarioOutline='';
  },
  openeditdialog:(state)=>{
    state.editdialogopen=true;
  },
  closeeditdialog:(state)=>{
    state.editdialogopen=false;
  },
  openresetrecord:(state)=>{
    state.resetrecordopen=true;
  },
  closeresetrecord:(state)=>{
    state.resetrecordopen=false;
  },
  opensettingdialog:(state)=>{
    state.settingopen=true;
  },
  closesettingdialog:(state)=>{
    state.settingopen=false;
  },
  updateTaskprogress:(state)=>{
    state.task=state.task.map((taskss)=>{
      if(taskss.progress >= 100) return taskss;
      const increment = Math.floor(Math.random()*15);
      return{
        ...taskss,
        progress: Math.min(100,taskss.progress +increment),
      }
    })
  }
},

});

export const {
    openDialog,
    closeDialog,
  openLoader,
  setProgress,
  resetPingcard,
  closeLoader,
  setUrl,
  setValidUrl,
  setAnalyzedat,
  setShowfinalReport,
  resetShowfinalReport,
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
  openclosingdialog,
  closeClosingdialog,
  opencustomicondialog,
  closecustomicondialog,
  setScenarioName,
  setScenarioOutline,
  clearScenario,
  openeditdialog,
  closeeditdialog,
  openresetrecord,
  closeresetrecord,
  opensettingdialog,
  closesettingdialog,
  updateTaskprogress,
} = featureSlice.actions;
export default featureSlice.reducer;
