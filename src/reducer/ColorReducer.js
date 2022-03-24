const colorReducer = (color = "red", action) =>{
    console.log("in color reducer")
    switch(action.type){
        case 'RED':
            return "red" ;
        case 'BLUE':
            return color = "blue";
        case 'GREEN':
            return "green" ;
        case 'PURPLE':
                return "purple" ;
        case 'PINK':
                return color = "pink";
        case 'YELLOW':
                return "yellow" ;
        case 'BLACK':
                return "black" ;
    }
}

export default colorReducer;