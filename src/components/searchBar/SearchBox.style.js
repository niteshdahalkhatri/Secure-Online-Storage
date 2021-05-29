import styled from "@emotion/styled";

const media = {
  SearchRes: "@media(max-width:848px)",
};

export const SearchContainer = styled.div`
  flex: 0 0 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Search = styled.input`
  width: 40%;
  height: 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 3.75rem;
  padding-right: 3rem;
  border: none;
  border-bottom: 1px solid #9966cc;
  outline: none;
  font-family: inherit;
  transition: 0.3s ease all;
  margin-left: -2.75rem;
  font-size: 1.6rem;
  background-color: #36454f;
  color: whitesmoke;
  ${media.SearchRes[0]} {
    font-size: 1.4rem;
  }

  &:focus {
    width: 50%;
  }

  &::placeholder {
    text-align: center;
    color: whitesmoke;
  }
`;

export const SearchIcon = styled.button`
  border: none;
  background-color: #36454f;
  z-index: 1;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &::active {
    transform: translateY(0.2rem);
  }
`;
