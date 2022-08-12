import { Navigation } from "../components";
import styled from "styled-components";

const MainView = () => {
  return (
    <PageWrap>
      <Navigation></Navigation>
      <BodyWrap className="container"></BodyWrap>
    </PageWrap>
  );
};

// Styles
const PageWrap = styled.div`
  height: 100vh;
`;

const BodyWrap = styled.div`
  height: 100%;
  background-color: #282828;
`;

// Exports
export default MainView;
