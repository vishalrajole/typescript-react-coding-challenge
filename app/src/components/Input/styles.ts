import styled from "styled-components";
import { SearchIcon } from "../Icons/Search";

export const SearchBarWrapper = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.SEARCH_BAR_BG};
  margin: 15px 0 30px 0;
  border: 1px solid grey;
  border-radius: 5px;

  color: ${(props) => props.theme.SEARCH_TEXT};
  overflow: hidden;
  align-items: center;
  input {
    width: 100%;
    height: 34px;
    background: none;
    border: none;
    padding: 5px 15px;
    outline: 0;
    font-size: 1.2rem;
    color: inherit;
  }
  ${SearchIcon} {
    padding: 0 15px;
  }
`;
