import DashboardCard09 from "../../components/dashboards/DashBoardCard09";
import DashboardCard01 from "../../components/dashboards/DashboardCard01";
import DashboardCard02 from "../../components/dashboards/DashboardCard02";
import DashboardCard03 from "../../components/dashboards/DashboardCard03";
import DashboardCard04 from "../../components/dashboards/DashboardCard04";
import DashboardCard05 from "../../components/dashboards/DashboardCard05";
import DashboardCard06 from "../../components/dashboards/DashboardCard06";
import DashboardCard10 from "../../components/dashboards/DashboardCard10";
import DashboardCard11 from "../../components/dashboards/DashboardCard11";
import MenuChoice from "../../components/menus/menuChoice";
import {
  DashboardContainer,
  FormGraph,
  Franchisee,
  LargeGraph,
  OneThirdGraph,
  RowWrapper,
  SmallGraph,
  TwoThirdsGraph,
} from "./style";

export function PageFranchisee() {
  return (
    <div style={{ display: "flex", width: "100vw" }}>
      <MenuChoice />
      <Franchisee>
        <DashboardContainer>
          <RowWrapper>
            <SmallGraph>
              <DashboardCard01 />
            </SmallGraph>
            <SmallGraph>
              <DashboardCard03 />
            </SmallGraph>
            <SmallGraph>
              <DashboardCard02 />
            </SmallGraph>
          </RowWrapper>

          <RowWrapper>
            <TwoThirdsGraph>
              <DashboardCard05 />
            </TwoThirdsGraph>
            <OneThirdGraph>
              <DashboardCard06 />
            </OneThirdGraph>
          </RowWrapper>

          <RowWrapper>
            <LargeGraph>
              <DashboardCard09 />
            </LargeGraph>
            <LargeGraph>
              <DashboardCard04 />
            </LargeGraph>
          </RowWrapper>

          <RowWrapper>
            <FormGraph className="first">
              <DashboardCard10 />
            </FormGraph>
            <FormGraph className="second">
              <DashboardCard11 />
            </FormGraph>
          </RowWrapper>
        </DashboardContainer>
      </Franchisee>
    </div>
  );
}
