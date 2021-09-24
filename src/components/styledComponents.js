import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderLink = styled(Link)`
  color: ${props => (props["data-is-active"] ? "white" : "#7fe3ff")};
  text-decoration: none;
  margin: 2px;
  font-size: 16px;
`;
