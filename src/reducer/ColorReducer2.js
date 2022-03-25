const initalState = {
    color: []
}

const ColorReducer2 = (state = initalState, action)=>{
    const newState = {...state};

    switch(action.type){
        case 'ADD_COLOR':
            console.log("In add color");
            newState.color.push(action.payload);
            console.log("color(s) " + newState.color)
            // return newState;
            break;
        case 'REMOVE_COLOR':
            console.log("In remove color");
            function arrayRemove(arr, value) { 
    
                return arr.filter(function(ele){ 
                    return ele !== value; 
                });
            }
            newState.color = arrayRemove(newState.color, action.payload);
            console.log("color(s) " + newState.color)
            // newState.color = action.payload;
            break;
        default:
            return newState;
    }
    return newState;
}
export default ColorReducer2;