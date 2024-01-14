import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    schedule: [],
    isAdding: false,
    editedMember: null,
  };

  const doctorSlice = createSlice({
    name: 'doctor',
    initialState:{
        schedule: [],
        isAdding: false,
    },
    reducers: {
      addSchedule: (state, action) => {
        state.schedule.push(action.payload);
      },
      setAdding: (state, action) => {
        state.isAdding = action.payload;
      },

    },
  });

export const { addSchedule, setAdding} = doctorSlice.actions;
export default doctorSlice.reducer;