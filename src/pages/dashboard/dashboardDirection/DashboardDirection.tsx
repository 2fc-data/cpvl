import { DashboardDirectionWrap } from "./DashboardDirection.styles";
import { Pilots } from "../pilots";
import { PilotDetail } from "../pilotDetail";
import { PilotsFinancial } from "../pilotsFinancial";
import { PilotsStatus } from "../pilotsStatus";

export const DashboardDirection = () => {
  return (
    <DashboardDirectionWrap>
      DashboardDirection
      <Pilots />
      <PilotDetail />
      <PilotsFinancial />
      <PilotsStatus />
    </DashboardDirectionWrap>
  );
};