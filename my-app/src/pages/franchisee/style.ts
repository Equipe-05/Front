import styled from "styled-components";

export const Franchisee = styled.div`
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
  height: 1640px;
  padding-bottom: 2rem;
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
  width: 50%;
  height: 20%;
  margin: 0 10px;
`;

export const TwoThirdsGraph = styled.div`
  width: 67%;
  height: 20%;
  margin: 0 10px;
`;

export const OneThirdGraph = styled.div`
  width: 32.5%;
  height: 20%;
  margin: 0 10px;
  margin-right: 13px;
`;

export const FormGraph = styled(LargeGraph)`
  height: 100%;
  width: 48.5%;

  &.first {
    margin-right: 13px;
    overflow: hidden;
  }

  &.second {
    width: 48.9%;
  }
`;
