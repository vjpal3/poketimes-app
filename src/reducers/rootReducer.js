const initState = {
    posts: [
       { id: 1, title: "sunt aut facere repellat provident occaecati", body: "quia et suscipit↵suscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto"},
       { id: 2, title: "qui est esse", body: "est rerum tempore vitae↵sequi sint nihil reprehend…aperiam non debitis possimus qui neque nisi nulla"},
       { id: 3, title: "ea molestias quasi exercitationem repellat qui ipsa sit aut", body: "et iusto sed quo iure↵voluptatem occaecat"}
    ]
}
const rootReducer = (state = initState, action) => {
    // console.log(action);
    if(action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });

        // console.log(newPosts);
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer;