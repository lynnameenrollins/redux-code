import axios from "axios";

export const fetchPostAction = async () =>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    return{
        type: "FETCH_POST",
        payload: response.data
    }
}