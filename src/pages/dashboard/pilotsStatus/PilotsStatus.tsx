import { useLoaderData } from "react-router-dom";
import { PilotsList } from "../../../components/pilotsList/";
import { PilotsStatusWrap } from "./PilotsStatus.styles";

export const PilotsStatus = () => {
  const pilots_takeoff = useLoaderData();

  return (
    <PilotsStatusWrap>
      <h1>Pilotos autorizados a decolar</h1>
      <h5>ABVL ok - ANAC ok - FMVL ok - CLUBE ok</h5>

      <PilotsList pilots={pilots_takeoff} />

    </PilotsStatusWrap>
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

