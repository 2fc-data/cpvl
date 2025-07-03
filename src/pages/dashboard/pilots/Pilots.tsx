import { useLoaderData } from 'react-router-dom';

import { PilotsWrap } from './Pilots.styles';

import { PilotsList } from "../../../components/pilotsList/";

export const Pilots = () => {
  const pilots = useLoaderData();

  return (
    <PilotsWrap>
      <h1>Pilots list</h1>

      <PilotsList pilots={pilots}/>
    </PilotsWrap>
  )
};
