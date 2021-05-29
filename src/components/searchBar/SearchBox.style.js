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
  border-bottom: 0.2rem solid black;
  outline: none;
  font-family: inherit;
  transition: 0.3s ease all;
  background-color: white;
  margin-left: -2.75rem;
  font-size: 1.8rem;
  ${media.SearchRes[0]} {
    font-size: 1.5rem;
  }

  &:focus {
    width: 50%;
  }

  &::placeholder {
    text-align: center;
  }
`;

export const SearchIcon = styled.button`
  border: none;
  background-color: white;
  z-index: 1;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &::active {
    transform: translateY(0.2rem);
  }
`;
