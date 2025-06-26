import { Link, useParams } from "react-router-dom";

import { PilotDetailWrap } from "./PilotDetail.styles";

export const PilotDetail = () => {
  const params = useParams();

  return (
    <PilotDetailWrap>
      <h1>Detalhes do Piloto</h1>
      <p>{params.pilotId}</p>
      <p><Link to=".." relative="path">Voltar</Link></p>
    </PilotDetailWrap>
  )
};
