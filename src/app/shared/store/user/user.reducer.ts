import { createReducer, on } from "@ngrx/store";
import { updateUserName } from "./user.actions";

const initialState = localStorage.getItem('username');
export const userDetails = createReducer(
    initialState,
    on(updateUserName, (state, action)=> action.userName )
)