import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
  url: '',
  isValidurl: false,
  draftColumns: [],
  mainDialogOpen: false,
  sessionDialogOpen: false,
  sessionType: null,
   customDialogOpen: false,
   featureDialogOpen:false,
    featureSessionOpen:false,
    sessionType:null,
};

const featureSlice = createSlice({
  name: 'feature',
  initialState,
 reducers: {
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
  setDraftColumns(state, action) {
    state.draftColumns = action.payload;
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
  }
},
});

export const {
    openDialog,
    closeDialog,
  setLoading,
  setUrl,
  setValidUrl,
  setDraftColumns,
  openMainDialog,
  closeMainDialog,
openFeaturedialog,
closeFeaturedialog,
startSession,
clearSession,
closeSession,
  openCustomdialog,
  closeCustomdialog,
} = featureSlice.actions;
export default featureSlice.reducer;
