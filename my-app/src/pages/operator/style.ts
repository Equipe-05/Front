import styled from "styled-components";

export const Operator = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000036;
`;

export const ImgStart = styled.img`
  max-height: 100vh;
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;
  width: 1240px;
  height: 1650px;
  padding-bottom: 3.5rem;
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  width: 100%;
`;

export const SmallGraph = styled.div`
  width: 100%;
  height: 20%;
  margin: 0 10px;
`;

export const LargeGraph = styled.div`
  width: 100%;
  height: 20%;
  margin: 0 10px;
`;

export const FullGraph = styled.div`
  width: 100%;
  margin: 0 10px;
  height: 20%;
`;

export const FormGraph = styled(LargeGraph)`
  height: 20%;
`;
