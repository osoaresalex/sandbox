import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import MapOf from "./MapOfComponents";
import HeroComponent from "./Hero";
import { getHeroes } from "../selectors";
import { fetchHerosList } from "../actions";
import { useIntersect } from "../useIntersect";
import styled from "styled-components";

const DivWarapper = styled.div`
  min-height: 400px;
`;

const HeroList = props => {
  const { page } = props;
  const [state, setState] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    setInterval(() => {
      setState(state => state + 1);
    }, 1000);
  }, []);

  const ref = useIntersect(() => {
    console.log(page);
    dispatch(fetchHerosList(page));
  });

  const list = useSelector(state => getHeroes(state, page));

  const renderHero = useCallback(
    hero => <HeroComponent key={hero.id} hero={hero} />,
    []
  );

  return (
    <DivWarapper ref={ref}>
      <h1 id={page}>{page}</h1>
      <div className="hero-list">
        <MapOf items={list} render={renderHero} />
      </div>
    </DivWarapper>
  );
};

export default HeroList;
