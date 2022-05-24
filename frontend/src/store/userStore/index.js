export default {
  namespaced: true,
  state: {
    loadedUsers: [
        {
          id: 1,
          userName: "idalmasso",
          description: "Here is the description"
        },
        {
          id: 2,
          userName: "cshannon",
          description: "A good bloke"
        },
        {
          id: 3,
          userName: "Nostradamus",
          description: "Another one bites to dust"
        },
        {
          id: 4,
          userName: "FinnishMan",
          description: "A good bloke"
        },
        
    ],
  },
  mutations: {
    ADD_USER(state, user) {
      // adds or updates a user for given usernAME
      // if at least one username in array is equal to passed user
      if (state.loadedUsers.some((u) => u.userName === user.userName)) {
        state.loadedUsers.splice(
          // get index of user in array
          state.loadedUsers.indexOf((u) => u.userName === user.userName),
          1 // remove one item from found id
        );
      }
      state.loadedUsers.push(user); // push updated user
    },
  },
  actions: {},
  getters: {
    getUser: state => userId => {
        if (state.loadedUsers.some(user => user.userName === userId)) {
            return state.loadedUsers.find(user => user.userName === userId);
        }else {
            // TODO: write serverrequest
            return {};
        }
    }
  },
};
