import { Link, useParams } from "react-router-dom";

import { PilotDetailWrap } from "./PilotDetail.styles";

export const PilotDetail = () => {
  const params = useParams();

  return (
    <PilotDetailWrap>
      <p>PilotDetails</p>
      <p>{params.pilotId}</p>
      <p><Link to=".." relative="path">Voltar</Link>Voltar</p>
    </PilotDetailWrap>
  )
};
