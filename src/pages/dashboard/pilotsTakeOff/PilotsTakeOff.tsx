import { useLoaderData } from "react-router-dom";
import { PilotsList } from "../../../components/pilotsList";
import { PilotsTakeOffWrap, PilotsTakeOffContent } from "./PilotsTakeOff.styles";

export const PilotsTakeOff = () => {
  const pilots_takeoff = useLoaderData();

  return (
    <PilotsTakeOffWrap>
      <h1>Pilotos autorizados a decolar</h1>
      <h5>ABVL ok - ANAC ok - FMVL ok - CLUBE ok</h5>

      <PilotsTakeOffContent>
        <PilotsList pilots={pilots_takeoff} />
      </PilotsTakeOffContent>

    </PilotsTakeOffWrap>
  );
}

export const Loader = async () => {
  const response = await fetch("http://localhost:8080/fiscal");

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Pilotos regulares não encontrados." }), {
      status: 500,
    })
  } else {
    const resData = await response.json();
    return resData.pilots;
  }
}

