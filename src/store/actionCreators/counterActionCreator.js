import {PLUS, MINUS} from "./constance"

export const plusValue = (value) => {
    return {
        type: PLUS,
        payload: value,
    }
}

export const minusValue = (value) => {
    return {
        type: MINUS,
        payload: value,
    }
}