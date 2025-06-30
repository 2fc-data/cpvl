import { Link } from 'react-router-dom';
import  { PilotsListWrap } from "./PilotsList.styles";

type Pilot = {
  id: string;
  name: string;
  // Add other properties as needed
};

export const PilotsList = ({ pilots }: { pilots: Pilot }) => {
  
  if (!Array.isArray(pilots)) {
    return <div>Error: Pilots is not an array</div>;
  }
  
  return (
    <PilotsListWrap>
      <ul>
        {pilots.map((pilot) => (
          <li key={pilot.id}>
            <Link to={`/pilots/${pilot.id}`}>              
              <div>
                <h2>{pilot.name}</h2>             
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </PilotsListWrap>
  );
}
