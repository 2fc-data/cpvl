import { Link } from 'react-router-dom';
import  { PilotsTakeOffListWrap } from "./PilotsTakeOffList.styles";

type Pilot = {
  id: string;
  name: string;
};

export const PilotsTakeOffList = ({ pilots }: { pilots: Pilot }) => {
  
  if (!Array.isArray(pilots)) {
    return <div>Error: Pilots is not an array</div>;
  }
  
  return (
    <PilotsTakeOffListWrap>      
      <ul>
        {pilots.map((pilot) => (
          <li key={pilot.id}>
            <Link to={`${pilot.id}`}>              
              <div>
                <h2>{pilot.name}</h2>             
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </PilotsTakeOffListWrap>
  );
}
