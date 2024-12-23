import styled from 'styled-components';

interface Textprops {
  fontSize?: string;
}
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 10%;
`;

export const Text = styled.text<Textprops>`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '3rem')};
  margin-bottom: 3rem;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;

  border: solid 1px black;
  padding: 2rem 2rem 0 2rem;
  width: 20%;
`;

export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: row;

  font-size: 2rem;
  font-weight: bold;
  text-align: left;
  margin-bottom: 3rem;
`;

export const Label = styled.div`
  width: 30%;
`;
export const Info = styled.div`
  width: 50%;
`;
