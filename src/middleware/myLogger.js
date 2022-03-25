const myLogger = store => {
    return next =>{
        return action =>{
            console.log("Middleware Ran...")
            return next(action)
        }
    }
}

export default myLogger;