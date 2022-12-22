import { combineReducers } from "redux";
const emailReducer = (state = "", action) => {
  if (action.type === "UPDATE_EMAIL") {
    return action.payload;
  }
  return state;
};

const passwordReducer = (state = "", action) => {
  if (action.type === "UPDATE_PASSWORD") {
    return action.payload;
  }
  return state;
};

export const rootReducer = combineReducers({
  email: emailReducer,
  password: passwordReducer,
});
