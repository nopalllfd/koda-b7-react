import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  surveys: [{ id: 0, name: 'Test', age: 10, gender: 'Perempuan', isSmoker: true, brands: [] }],
};

const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    addSurvey: (state, { payload }) => {
      state.surveys.push(payload);
    },
    removeSurvey: (state, { payload }) => {
      state.surveys = state.surveys.filter((survey) => survey.id !== payload.id);
    },
  },
});

export const { addSurvey, removeSurvey } = surveySlice.actions;
export default surveySlice.reducer;
