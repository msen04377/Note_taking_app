import { INCREMENT, DECREMENT,RESET } from "../actions/types";

const initialStore = {
    counter:0
}
console.log("*")
const counterReducer = (state = initialStore, action) => {
    switch (action.type) {
        case INCREMENT:
            console.log("*")
            return {
                ...state,
                counter: state.counter + 1
            };
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            };
        case RESET:
            return {
                ...state,
                counter: 0
            };
        default:
            return state;
    }
}

export default counterReducer;