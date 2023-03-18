export default (posts = [],action) => {
    switch (action.payload) {
        case "FETCH_ALL":
            console.log(action.payload)
            return action.payload
        case "CREATE":
             return [...posts,action.payload]
    
        default:
            return posts;
    }
}