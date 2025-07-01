import { Link } from 'react-router-dom';

interface PilotTakeOff {
  id: string;
  name: string;
  locked: string;
  contactName: string;
  contactPhone: string;
  DateABVL: string;
  DateANAC: string;
  CPVL: string;
}

interface PilotTakeOffItemProps {
  pilotTakeOff: PilotTakeOff;
}

export const PilotTakeOffItem = ({ pilotTakeOff }: PilotTakeOffItemProps) => {

  return (
    <article>
      <h3>Nome: {pilotTakeOff.name}</h3>
      <h3>Trancado: {pilotTakeOff.locked}</h3>
      <h3>Contato emergência: {pilotTakeOff.contactName}</h3>
      <h3>Fone emergência: {pilotTakeOff.contactPhone}</h3>
      <h3>Data expira ABVL: {pilotTakeOff.DateABVL}</h3>
      <h3>Data expira ANAC: {pilotTakeOff.DateANAC}</h3>
      <h3>Mês expira CPVL: {pilotTakeOff.CPVL}</h3>
      <br />
      <div>
        <Link to="..">Voltar</Link>
      </div>
    </article>
  );
}
