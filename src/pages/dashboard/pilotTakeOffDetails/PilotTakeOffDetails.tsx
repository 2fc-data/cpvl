import { useLoaderData } from "react-router-dom";
import { PilotTakeOffItem } from "../../../components/pilotTakeOffItem";

import { PilotTakeOffDetailsWrap } from "./PilotTakeOffDetails.styles";

export const PilotTakeOffDetails = () => {
  const data = useLoaderData();

  return (
    <PilotTakeOffDetailsWrap>
      <PilotTakeOffItem pilotTakeOff={data.pilot } />
    </PilotTakeOffDetailsWrap>
  )
};

export async function loader({request, params}) {
  const id = params.id;

  const response = await fetch('http://localhost:8080/fiscal/' + id);

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: 'Piloto não identificado.'}),
      { status: 500 }
    );
  } else {
    return response;
  }
}
