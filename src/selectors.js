import { createSelector } from "reselect";

const getHeroesList = (state, key) => state.heroes.list[key] || [];

export const getHeroes = createSelector(
  [getHeroesList],
  heroes =>
    heroes.filter(hero => {
      return !hero.thumbnail.path.includes("image_not_available");
    })
);
