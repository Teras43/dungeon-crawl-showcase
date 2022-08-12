import styled from "styled-components";

// Types
type CardTypes = {
  name: string;
  img: string;
};

const Card = ({ name, img }: CardTypes) => {
  return (
    <SectionWrap>
      <ImgWrap className="mx-auto">
        <CardImg src={img} />
      </ImgWrap>
      <CardTitle className="py-1">{name}</CardTitle>
    </SectionWrap>
  );
};

// Styles
const SectionWrap = styled.div`
  border: 1px solid #1a1a1a;
  padding: 20px 0px;
  width: 100%;
  background-color: #1a1a1a;
  border-radius: 8px;
`;

const ImgWrap = styled.div`
  height: 28rem;
  width: 80%;
`;

const CardImg = styled.img`
  height: 100%;
  width: 100%;
`;

const CardTitle = styled.div`
  color: white;
  font-size: 24px;
  font-style: italic;
`;

// Exports
export default Card;
