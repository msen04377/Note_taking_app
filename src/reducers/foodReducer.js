import { ADD_FOOD, DELETE_FOOD } from "../actions/types";

const initialStore = {
    foodList: []
}

const foodReducer = (state = initialStore, action) => {
    switch (action.type) {
        case ADD_FOOD:
            return {
                ...state,
                foodList: state.foodList.concat({
                    key: Math.random(),
                    name: action
                })
            };
        case DELETE_FOOD:
            return {
                ...state,
                foodList: state.foodList.filter((item) =>
                    item.key !== key)
            }
        default:
            return state;
    }
}

export default foodReducer;