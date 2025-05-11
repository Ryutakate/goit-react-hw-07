import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        changeFilter(state, action) {
            state.name = action.payload;
        },
    },
});

export const { changeFilter } = filtersSlice.actions; // Експортуємо changeFilter
export const selectNameFilter = (state) => state.filters.name; // Селектор

export default filtersSlice.reducer;
