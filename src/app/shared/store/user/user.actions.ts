import { createAction, props } from "@ngrx/store";

export const updateUserName = createAction(
    '[User] UserName',
    props<{userName: string}>()
)