import styled from "styled-components";

// Types
type NavTypes = {
  searchState: string | undefined;
  setSearchState: React.Dispatch<React.SetStateAction<string>>;
};

const Navigation = ({ searchState = "", setSearchState }: NavTypes) => {
  return (
    <NavWrap className="px-1">
      <div className="row">
        <TextLogo className="col py-3">Horror TCG</TextLogo>
        <form className="d-flex pb-3 px-5" role="search">
          <SearchInput
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchState}
            onChange={(event) => setSearchState(event.target.value)}
          />
          {/* <button className="btn btn-outline-danger" type="submit">
            Search
          </button> */}
        </form>
      </div>
    </NavWrap>
  );
};

// Styles
const NavWrap = styled.nav`
  height: 25%;
  border-bottom: 1px solid #d92c2c;
  background-color: #1a1a1a;
`;

const TextLogo = styled.div`
  font-family: "Rubik Distressed", cursive;
  font-size: 28px;
  color: #d92c2c;
`;

const SearchInput = styled.input`
  color: #d92c2c;
`;

// Exports
export default Navigation;
