import { ITodo } from '@/app/types/todo'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Iform {
    text: string;
}
export interface ToDoState {
  todos : Array<ITodo>;
  form: Iform
}

const initialState: ToDoState = {
  todos: [],
  form: {
    text: "",
  }
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state,action: PayloadAction<ITodo>)=> {
        state.todos  = [ ...state.todos, action.payload];    // Redux Toolkit allows us to write "mutating" logic in reducers. It
     
     },
     setText: (state, action: PayloadAction<string>) =>{
        state.form ={ ...state.form, text: action.payload};
     },
     }
    
    });
// Action creators are generated for each case reducer function
export const { addTodo, setText } = todoSlice.actions

export default todoSlice.reducer