export function todoApp(state = {
    data: "empty"
}, action) {
    switch (action.type) {
        case 'SOME_ACTION':
            return {
                    ...state,
                data: action.data
            }
        case 'UPDATE':
            return {
                    ...state,
                data: action.data
            }
        default:
            return state
    }
}
