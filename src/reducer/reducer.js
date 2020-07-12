import * as actionType from './actions';

const initialState = {
    items: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_ITEM:            
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case actionType.REMOVE_ITEM: {
            console.log(action);
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id)
            }
        }
        case actionType.MARK_ITEM: {
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id === action.payload.id) {
                        item.marked = !item.marked
                        
                    }
                    return item
                })
            }
        }
        default:
            return state
    }
}

export default reducer;