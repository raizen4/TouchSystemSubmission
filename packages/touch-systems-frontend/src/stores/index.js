import React, { useReducer, createContext } from "react";

export const UserStore = createContext();

const initialValues = {
  currentUser: {
    userDisplayName: "Guest",
    userEmail: "Not Available",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    case "DEL_USER":
      return {
        ...state,
        currentUser: {},
      };

    default:
      throw new Error();
  }
};

export const UserStoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  return <UserStore.Provider value={[state, dispatch]}>{props.children}</UserStore.Provider>;
};
