const initalState =[];
const postReducer = (state = initalState, action) =>{
    state = action.payload;
    return state;
}

export default postReducer;