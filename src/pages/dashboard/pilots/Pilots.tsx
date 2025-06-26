import { Link } from 'react-router-dom';
import { PilotsWrap } from './Pilots.styles';

const PILOTS = [
  {id: 'p1', name: 'Pilot 1'},
  {id: 'p2', name: 'Pilot 2'},
  {id: 'p3', name: 'Pilot 3'},
]

export const Pilots = () => {
  return (
    <PilotsWrap>
      <h1>Pilots list</h1>

      <ul>
        {PILOTS.map(pilot => 
          <li key={pilot.id}>
            <Link to={`${pilot.id}`}>{pilot.name}</Link>
          </li>)}        
      </ul>
    </PilotsWrap>
  )
};
