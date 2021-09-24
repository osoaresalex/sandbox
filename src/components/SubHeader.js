import React from "react";

import { HeaderLink } from "./styledComponents";

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
const PAGES = ALPHABET.split("");

const SubHeader = ({ currentPage = "a" }) => {
  const index = PAGES.indexOf(currentPage);
  const previous = index > 0 && PAGES[index - 1];
  const next = index < 23 && PAGES[index + 1];
  return (
    <div className="sub-header">
      {previous && <HeaderLink to={previous}>{"<"}</HeaderLink>}
      {PAGES.map(page => (
        <HeaderLink key={page} to={page} data-is-active={page === currentPage}>
          {page}
        </HeaderLink>
      ))}
      {next && <HeaderLink to={next}>{">"}</HeaderLink>}
    </div>
  );
};

export default SubHeader;
