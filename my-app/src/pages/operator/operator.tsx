import styled from "styled-components";
import DashboardCard09 from "../../components/dashboards/DashBoardCard09";
import DashboardCard01 from "../../components/dashboards/DashboardCard01";
import DashboardCard02 from "../../components/dashboards/DashboardCard02";
import DashboardCard03 from "../../components/dashboards/DashboardCard03";
import DashboardCard04 from "../../components/dashboards/DashboardCard04";
import DashboardCard07 from "../../components/dashboards/DashboardCard07";
import DashboardCard10 from "../../components/dashboards/DashboardCard10";
import DashboardCard11 from "../../components/dashboards/DashboardCard11";
import MenuChoice from "../../components/menus/menuChoice";
import { Manager } from "./style";

export function PageOperator() {
  return (
    <div style={{ display: "flex", width: "100vw" }}>
      <MenuChoice />
      <Manager>
        <DashboardContainer>
          <RowWrapper>
            <FormGraph>
              <DashboardCard07 />
            </FormGraph>
            <FormGraph>
              <DashboardCard10 />
            </FormGraph>
          </RowWrapper>

          <RowWrapper>
            <SmallGraph>
              <DashboardCard02 />
            </SmallGraph>
            <SmallGraph>
              <DashboardCard03 />
            </SmallGraph>
            <SmallGraph>
              <DashboardCard01 />
            </SmallGraph>
          </RowWrapper>

          <RowWrapper>
            <LargeGraph>
              <DashboardCard04 />
            </LargeGraph>
            <LargeGraph>
              <DashboardCard09 />
            </LargeGraph>
          </RowWrapper>

          <RowWrapper>
            <FullGraph>
              <DashboardCard11 />
            </FullGraph>
          </RowWrapper>
        </DashboardContainer>
      </Manager>
    </div>
  );
}

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;
  width: 1240px;
  height: 1750px;
  padding-bottom: 2rem;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  width: 100%;
`;

const SmallGraph = styled.div`
  width: 100%;
  height: 20%;
  margin: 0 10px;
`;

const LargeGraph = styled.div`
  width: 100%;
  height: 20%;
  margin: 0 10px;
`;

const TwoThirdsGraph = styled.div`
  width: 66.66%;
  height: 20%;
  margin: 0 10px;
`;

const FullGraph = styled.div`
  width: 100%;
  margin: 0 10px;
  height: 20%;
`;

const OneThirdGraph = styled.div`
  width: 33%;
  height: 20%;
  margin: 0 10px;
  margin-right: 13px;
`;

const FormGraph = styled(LargeGraph)`
  height: 20%;
`;
