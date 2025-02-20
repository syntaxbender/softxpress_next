import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    type: "",
    message: ""
}
const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        setField: (state, action) => {
            const { field, value } = action.payload;
            state[field] = value;
        },
        resetFields: () => initialState,
    },
});

export const { setField, resetFields } = contactSlice.actions;

export const getContactState = (state) => state.contact;

export default contactSlice.reducer;
