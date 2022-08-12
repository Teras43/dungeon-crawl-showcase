import styled from "styled-components";

// Types
type HeaderTypes = {
  text?: string;
};

const Header = ({ text = "All Cards" }: HeaderTypes) => {
  return (
    <HeaderWrap className="pt-1">
      <HeaderText className="pt-2">
        {text === "All Cards" ? text : "Searching for: " + text}
      </HeaderText>
    </HeaderWrap>
  );
};

// Styles
const HeaderWrap = styled.div`
  height: 3rem;
`;

const HeaderText = styled.div`
  color: white;
  font-size: 20px;
  text-align: left;
`;

// Exports
export default Header;
