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
  width: 30%;
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
  font-size: 1.5rem;
  background-color: #36454f;
  color: whitesmoke;
  letter-spacing: inherit;
  ${media.SearchRes[0]} {
    font-size: 1.3rem;
  }

  &:focus {
    width: 35%;
  }

  &::placeholder {
    text-align: center;
    color: whitesmoke;
    letter-spacing: inherit;
    font-size: 1.4rem;
    ${media.SearchRes[0]} {
      font-size: 1rem;
    }
  }
`;

export const SearchIcon = styled.button`
  border: none;
  background-color: #36454f;
  z-index: 1;
  cursor: pointer;
  font-size: 2rem;
  &:focus {
    outline: none;
  }
  &::active {
    transform: translateY(0.2rem);
  }
`;
