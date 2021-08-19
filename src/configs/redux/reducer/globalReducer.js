const initialState = {
    name: 'cukijan'
}
const globalReducer = (state = initialState, action) => {
    if (action.type === 'UPDATE_NAME') {
        return {
            ...state,
            name: 'willy'
        }

    }
    return state
}

export default globalReducer