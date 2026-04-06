import { createSlice } from '@reduxjs/toolkit';



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
  const defaultColumns = AllColumns.filter(col => col.default).map(col=>col.key);
const tasks=[
  { id: 1, name: "Scenario_file_Name", progress: 0 },
    { id: 2, name: "Scenario_file_Name", progress: 0 },
    { id: 3, name: "Scenario_file_Name", progress: 0 },
];
const initialState = {
    open: false,
    themMode:'light',
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
    rowsperPage:5,
    searchterm:'',
    rows:[],
    selectcolumns:defaultColumns,
    nextOpen:false,
  closingDialogopen:false,
  customicondialogopen:false,
  scenarioName:'',
  scenarioOutline:'',
  editdialogopen:false,
  resetrecordopen:false,
  recordopen:false,
  settingopen:false,
  task:tasks,
  file:null,
  filename:'',
  filecontent:'',
  editurl:false,
  isExpanded: false,
};

const featureSlice = createSlice({
  name: 'feature',
  initialState,
 reducers: {
  addRow:(state)=>{
    const newId=state.rows.length +1;
    state.rows.push({id:newId,
       contentName: `Name`,
    controlType: '',
    Xpath: 'Xpath',
    pageName: 'HomePage',
    controlValue: 'control value',
    appUrl: 'https://example.com',
    featureName: 'LoginFeature',
    nodeName: 'Node1',
    });

    const totalPages = Math.ceil(state.rows.length / state.rowsperPage);
    state.currentPage=totalPages;
  },
  toggleTheme:(state)=>{
    state.themMode = state.themMode === 'light' ? 'dark' :'light';
  },
  deleteRow:(state,action) =>{
    state.rows=state.rows.filter(row=>row.id != action.payload);
    const totalPages = Math.ceil(state.rows.length/state.rowsperPage);
    if (state.currentPage > totalPages && totalPages > 0){
      state.currentPage = totalPages;
    }
    if(state.rows.length === 0){
      state.currentPage = 1;
    }
  },
  updateRow:(state,action) =>{
    const {id,key,value}=action.payload;
    const row=state.rows.find(r=>r.id === id);
    if(row){
      row[key]=value;
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
    state.draftColumns=[...state.selectcolumns]
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
  openrecord:(state)=>{
    state.recordopen=true;
  },
  closerecord:(state)=>{
    state.recordopen=false;
  },
  opensettingdialog:(state)=>{
    state.settingopen=true;
  },
  closesettingdialog:(state)=>{
    state.settingopen=false;
  },
  setSearchterm: (state,action)=>{
    state.searchterm=action.payload;
    state.currentPage= 1;
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
  },
  setFile:(state,action)=>{
    state.file=action.payload;
    state.filename=action.payload.name;
  },
  setFilecontent:(state,action) =>{
    state.filecontent=action.payload;
  },
  clearfile:(state)=>{
    state.file=null;
    state.filename='';
    state.filecontent='';
  },
  toggleExpanded: (state) => {
  state.isExpanded = !state.isExpanded;
},
openediturl:(state)=>{
  state.editurl=true;
},
closeediturl:(state)=>{state.editurl=false;},
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
   toggleExpanded,
  opensettingdialog,
  closesettingdialog,
  updateTaskprogress,
  updateRow,
  setSearchterm,
  setFile,
  setFilecontent,
  clearfile,
  toggleTheme,
  openrecord,
  closerecord,
  openediturl,
  closeediturl,
} = featureSlice.actions;
export default featureSlice.reducer;
