import { INCREMENT,DECREMENT,RESET } from "./types";

export const incrementCounter = () =>(
    {
        type:INCREMENT
    }
)

export const decrementCounter = () =>(
    {
        type:DECREMENT
    }
)

export const resetCounter = () =>(
    {
        type:RESET
    }
)