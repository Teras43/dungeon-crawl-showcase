import styled from "styled-components";

// Types
type HeaderTypes = {
  text: string;
};

const Header = ({ text }: HeaderTypes) => {
  return (
    <HeaderWrap>
      <div></div>
    </HeaderWrap>
  );
};

// Styles
const HeaderWrap = styled.div``;

// Exports
export default Header;
