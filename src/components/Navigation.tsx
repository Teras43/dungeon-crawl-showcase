import styled from "styled-components";

const Navigation = () => {
  return (
    <NavWrap className="px-1">
      <div className="row">
        <TextLogo className="col py-3">Horror TCG</TextLogo>
        <form className="d-flex pb-3" role="search">
          <SearchInput
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-danger" type="submit">
            Search
          </button>
        </form>
      </div>
    </NavWrap>
  );
};

// Styles
const NavWrap = styled.nav`
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
