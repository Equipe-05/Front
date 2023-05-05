import DashboardCard09 from "../../components/dashboards/DashBoardCard09";
import DashboardCard01 from "../../components/dashboards/DashboardCard01";
import DashboardCard02 from "../../components/dashboards/DashboardCard02";
import DashboardCard03 from "../../components/dashboards/DashboardCard03";
import DashboardCard04 from "../../components/dashboards/DashboardCard04";
import DashboardCard07 from "../../components/dashboards/DashboardCard07";
import DashboardCard10 from "../../components/dashboards/DashboardCard10";
import DashboardCard11 from "../../components/dashboards/DashboardCard11";
import MenuChoice from "../../components/menus/menuChoice";
import {
  DashboardContainer,
  FormGraph,
  FullGraph,
  LargeGraph,
  Operator,
  RowWrapper,
  SmallGraph,
} from "./style";

export function PageOperator() {
  return (
    <div style={{ display: "flex", width: "100vw" }}>
      <MenuChoice />
      <Operator>
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
      </Operator>
    </div>
  );
}
