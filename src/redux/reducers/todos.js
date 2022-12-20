import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../constants/actionType";

const initialState = {
    allIds: [],
    byIds: {}
};

export default function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            const { id, content } = action.payload;
            // const id = action.payload.id
            // const content = action.payload.content


            return {
                ...state,
                allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds,
                    [id]: {
                        content,
                        completed: false
                    }
                }
            };
        }
        case TOGGLE_TODO: {
            const { id } = action.payload;
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [id]: {
                        ...state.byIds[id],
                        completed: !state.byIds[id].completed
                    }
                }
            };
        }
        case DELETE_TODO: {
            const { id } = action.payload;
            const newByIds = state.byIds
            delete newByIds[id]
            const newAllIds = state.allIds.filter(list => list !== id)
            console.log(state.byIds);
            return {
                ...state,
                allIds: newAllIds,
                byIds: newByIds
            };
        }
        default:
            return { ...state };
    }
}