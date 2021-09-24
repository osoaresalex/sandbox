import {
  // FETCH_HEROS_DATA_SUCCESS,
  FETCH_SINGLE_HERO_DATA_SUCCESS
} from "./actions";

const initialListState = {
  list: [],
  count: 0
};

const initialListStateHeroData = {
  heroesDetails: {
    thumbnail: {
      path: "",
      extension: ""
    }
  }
};

export function heroesReducer(state = initialListState, action) {
  switch (action.type) {
    case "HEROES_LIST_SUCCESS":
      return {
        ...state,
        list: {
          ...state.list,
          [action.key]: action.data.results
        },
        count: action.data.total,
        offset: action.data.offset
      };
    default:
      return state;
  }
}

export function singleHeroesReducer(state = initialListStateHeroData, action) {
  switch (action.type) {
    case FETCH_SINGLE_HERO_DATA_SUCCESS:
      return {
        ...action.response.results[0]
      };
    default:
      return state;
  }
}
