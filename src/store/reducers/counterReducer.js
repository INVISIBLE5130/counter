import {PLUS, MINUS} from "../actionCreators/constance"

const initialState = {
    count: 0
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case PLUS:
            console.log(action.payload)
            return {
                count: action.payload
            };
            break;
        case MINUS:
            return {
                count: action.payload
            };
            break;
        default: return state
    }
}

export default counterReducer;