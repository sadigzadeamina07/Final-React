import React, {
  createContext,
  useContext,
  useReducer,
} from 'react';

const NavContext = createContext();

const initialState = {
  isOpen: false,
  history: ['MAIN'],
};

function reducer(state, action) {
  switch (action.type) {
    case 'OPEN_MENU':
      return {
        ...state,
        isOpen: true,
      };

    case 'CLOSE_MENU':
      return {
        isOpen: false,
        history: ['MAIN'],
      };

    case 'GO_TO':
      return {
        ...state,
        history: [...state.history, action.payload],
      };

    case 'GO_BACK':
      return {
        ...state,
        history: state.history.slice(0, -1),
      };

    default:
      return state;
  }
}

export function NavProvider({ children }) {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  const activeMenu =
    state.history[state.history.length - 1];

  return (
    <NavContext.Provider
      value={{
        isOpen: state.isOpen,
        history: state.history,
        activeMenu,

        openMenu: () =>
          dispatch({ type: 'OPEN_MENU' }),

        closeMenu: () =>
          dispatch({ type: 'CLOSE_MENU' }),

        goTo: (menu) =>
          dispatch({
            type: 'GO_TO',
            payload: menu,
          }),

        goBack: () =>
          dispatch({ type: 'GO_BACK' }),
      }}
    >
      {children}
    </NavContext.Provider>
  );
}

export function useNav() {
  return useContext(NavContext);
}