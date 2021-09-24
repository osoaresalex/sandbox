import createNextState from "immer";

export const zeroImmer = zeroAction => (state, ...args) => {
  return createNextState(state, draft => zeroAction(draft, ...args));
};

export function fetchHerosList(page = "a") {
  return {
    type: "HEROES_LIST",
    API_CALL: {
      types: ["HEROES_LIST_SUCCESS", "HEROES_LIST_FAILURE"],
      endpoint: "/characters",
      params: {
        nameStartsWith: page
      },
      key: page,
      method: "get"
    }
  };
}

export const setHeroList = zeroImmer((state, data) => {
  state.heroList = data;
});
