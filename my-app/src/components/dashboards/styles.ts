import styled from "styled-components";

export const ScreenContainer = styled.div`
  display: flex;
  overflow: hidden;
  height: 100vh;
`;

export const ContentArea = styled.div`
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  flex-direction: column;
  flex: 1 1 0%;
`;

export const MainContent = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
  /* width: 100%; */

  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const DashBoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 1.5rem;
`;
export const ChartContainer = styled.div`
  flex-grow: 1;
`;

export const DashBoardCard = styled.div`
  display: flex;
  background-color: #ffffff;
  flex-direction: column;
  flex-grow: 1;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 2;
  width: fit-content;

  @media (min-width: 640px) {
    grid-column: span 6 / span 6;
  }

  @media (min-width: 1280px) {
    grid-column: span 4 / span 4;
  }
`;
export const DashBoardCardHeader = styled.div`
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  /* padding-top: 1.25rem; */
`;

export const LineChartHeader = styled(DashBoardCardHeader)`
  border-bottom: 1px solid #f1f5f9;
`;

export const LineChartAlignedHeader = styled.div`
  display: flex;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  align-items: center;
  border-bottom: 1px solid #f1f5f9;
`;

export const DashBoardCardTitle = styled.h2`
  color: rgb(30 41 59);
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
`;

export const BarChartTitle = styled.h2`
  color: #1e293b;
  font-weight: 600;
`;

export const BarChartMoney = styled.div`
  margin-right: 0.5rem;
  font-size: 1.875rem;
  color: #1e293b;
  line-height: 2.25rem;
  font-weight: 700;
`;

export const PaddingContainer = styled.div`
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
`;

export const FlexItemsStartContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const LinearChartDescription = styled.p`
  margin-bottom: 0.25rem;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 600;
  text-transform: uppercase;
`;

export const LinearChartBody = styled.div`
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  flex: 1 1 auto;
  min-height: 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`;

export const LineChartMoneyContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const LineChartMoney = styled.h3`
  margin-right: 0.5rem;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
`;

export const LineChartMoneyTag = styled.p`
  padding-left: 0.375rem;
  padding-right: 0.375rem;
  background-color: #10b981;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  border-radius: 9999px;
`;

export const LineChartNegativeMoneyTag = styled(LineChartMoneyTag)`
  background-color: #f59e0b;
`;

export const LegendUL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  li {
    all: unset;
    margin-bottom: 16px;

    button {
      all: unset;
      display: inline-flex;
      align-items: center;

      span.box {
        display: block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        margin-right: 8px;
        border: 3px solid #ffffff;
        pointer-events: none;
      }
      span.labelContainer {
        all: unset;
        display: flex;
        align-items: center;

        span.value {
          all: unset;
          color: #1e293b;
          font-size: 1.875rem;
          line-height: 2.25rem;
          font-weight: 600;
          margin-right: 8px;
          pointer-events: none;
        }

        span.label {
          all: unset;
          color: #64748b;
          font-size: 0.875rem;
          line-height: 1.25rem;
        }
      }
    }
  }
`;
