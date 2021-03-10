export const initialState = {
  user: null,
};

export const actionTypes = {
  SET_USER_WITH_GOOGLE: "SET_USER_WITH_GOOGLE",
  DELETE_USER_WITH_GOOGLE: "DELETE_USER_WITH_GOOGLE",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_WITH_GOOGLE:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.DELETE_USER_WITH_GOOGLE:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
