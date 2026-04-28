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
  draftColumns: {
  scraper: defaultColumns,
  record: defaultColumns,
  table: defaultColumns,
},
  mainDialogOpen: false,
  checkDialog:false,
  sessionDialogOpen: false,
  sessionType: null,
   customDialogOpen: false,
   featureDialogOpen:false,
    featureSessionOpen:false,
    currentPage:1,
    rowsperPage:5,
    searchtermscarper:'',
    searchtermscenario:'',
    searchtermtable:'',
    scraperRows: [],
    recordRows: [],
    tableRows: [],
    scraperSaved: true,
    recordSaved: true,
    tableSaved: true,
   selectcolumns: {
  scraper: defaultColumns,
  record: defaultColumns,
  table: defaultColumns,
},
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
   unsavedDialogOpen: false,
    pendingNavRoute: null,
    scraperSavedRows: [],  
recordSavedRows: [],
tableSavedRows: [],
resetSaveChecked: true,
};

const featureSlice = createSlice({
  name: 'feature',
  initialState,
 reducers: {
  addRow:(state,action)=>{
    const page = action.payload;
    const rowsKey = page === 'scraper' ? 'scraperRows' :
                    page === 'record' ? 'recordRows' :
                    'tableRows';
      const savedKey = page === 'scraper' ? 'scraperSaved'
                           : page === 'record'  ? 'recordSaved'
                           : 'tableSaved';

            const rows = state[rowsKey];
            const newId = rows.length > 0 ? Math.max(...rows.map(r => r.id)) + 1 : 1;
            rows.push({
                id: newId,
                contentName: 'Name',
                controlType: '',
                Xpath: 'Xpath',
                pageName: 'HomePage',
                controlValue: 'control value',
                appUrl: 'https://example.com',
                featureName: 'LoginFeature',
                nodeName: 'Node1',
            });

            state[savedKey] = false;
            const totalPages = Math.ceil(rows.length / state.rowsperPage);
            state.currentPage = totalPages;
        },
  toggleTheme:(state)=>{
    state.themMode = state.themMode === 'light' ? 'dark' :'light';
  },
    deleteRow: (state, action) => {
            const { id, page } = action.payload;
            const rowsKey = page === 'scraper' ? 'scraperRows'
                          : page === 'record'  ? 'recordRows'
                          : 'tableRows';
            const savedKey = page === 'scraper' ? 'scraperSaved'
                           : page === 'record'  ? 'recordSaved'
                           : 'tableSaved';

            state[rowsKey] = state[rowsKey].filter(row => row.id !== id);
            state[savedKey] = false;

            const totalPages = Math.ceil(state[rowsKey].length / state.rowsperPage);
            if (state.currentPage > totalPages && totalPages > 0) {
                state.currentPage = totalPages;
            }
            if (state[rowsKey].length === 0) {
                state.currentPage = 1;
            }
        },
   updateRow: (state, action) => {
            const { id, key, value, page } = action.payload;
            const rowsKey = page === 'scraper' ? 'scraperRows'
                          : page === 'record'  ? 'recordRows'
                          : 'tableRows';
            const savedKey = page === 'scraper' ? 'scraperSaved'
                           : page === 'record'  ? 'recordSaved'
                           : 'tableSaved';

            const row = state[rowsKey].find(r => r.id === id);
            if (row) {
                row[key] = value;
                state[savedKey] = false;
            }
        },
    markSaved: (state, action) => {
    const page = action.payload;
    if (page === 'scraper') {
        state.scraperSaved = true;
        state.scraperSavedRows = [...state.scraperRows]; 
    } else if (page === 'record') {
        state.recordSaved = true;
        state.recordSavedRows = [...state.recordRows];
    } else if (page === 'table') {
        state.tableSaved = true;
        state.tableSavedRows = [...state.tableRows];
    }
},loadRows: (state, action) => {
    const { page, rows } = action.payload;
    if (page === 'scraper') {
        state.scraperRows = rows;
        state.scraperSavedRows = [...rows]; 
        state.scraperSaved = true;
    } else if (page === 'record') {
        state.recordRows = rows;
        state.recordSavedRows = [...rows];
        state.recordSaved = true;
    } else if (page === 'table') {
        state.tableRows = rows;
        state.tableSavedRows = [...rows];
        state.tableSaved = true;
    }
},
          openUnsavedDialog: (state, action) => {
            state.unsavedDialogOpen = true;
            state.pendingNavRoute = action.payload || null;
        },
        closeUnsavedDialog: (state) => {
            state.unsavedDialogOpen = false;
            state.pendingNavRoute = null;
        },
         discardUnsavedRows: (state, action) => {
            const page = action.payload;
            if (page === 'scraper') state.scraperSaved = true;
            else if (page === 'record') state.recordSaved = true;
            else if (page === 'table') state.tableSaved = true;
        },
        setResetSaveChecked: (state, action) => {
  state.resetSaveChecked = action.payload;
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
toggleDraftcolumn: (state, action) => {
  const { page, key } = action.payload;

  const pageCols = state.draftColumns[page] || [];

  if (pageCols.includes(key)) {
    state.draftColumns[page] = pageCols.filter(item => item !== key);
  } else {
    state.draftColumns[page] = [...pageCols, key];
  }
},
 openCheckDialog(state, action){
  const page = action.payload;

  state.checkDialog = true;

  state.draftColumns[page] = [
    ...(state.selectcolumns[page] || [])
  ];
},
  closecheckDialog(state){
    state.checkDialog=false;
  },
  setselectcolumns: (state, action) => {
  const { page, columns } = action.payload;
  state.selectcolumns[page] = columns;
},
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
    state.resetrecordopen = true;
  state.resetSaveChecked = true;
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
setsearchtermscraper:(state,action)=>{
  state.searchtermscarper=action.payload;
  state.currentPage=1;
},
setsearchtermscenario:(state,action)=>{
  state.searchtermscenario=action.payload;
  state.currentPage=1;
},
setsearchtermtable:(state,action)=>{
  state.searchtermtable=action.payload;
  state.currentPage=1;
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
resetUnsavedRows: (state, action) => {
    const page = action.payload;
    if (page === 'scraper') {
        state.scraperRows = [...state.scraperSavedRows]; 
        state.scraperSaved = true;
    }  else if (page === 'record') {
    state.recordRows = [...state.recordSavedRows]; 
    state.recordSaved = true;
    } else if (page === 'table') {
        state.tableRows = [...state.tableSavedRows];
        state.tableSaved = true;
    }
    state.currentPage = 1;
},
},

});

export const {
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
  setFile,
  setFilecontent,
  clearfile,
  toggleTheme,
  openrecord,
  closerecord,
  openediturl,
  closeediturl,
  setsearchtermscenario,
  setsearchtermscraper,
  setsearchtermtable,
  markSaved,
  loadRows,
  openUnsavedDialog,
  closeUnsavedDialog,
  discardUnsavedRows,
  resetUnsavedRows,
  setResetSaveChecked,
} = featureSlice.actions;
export default featureSlice.reducer;
