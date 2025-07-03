import { Link } from 'react-router-dom';
import  { PilotsTakeOffListWrap } from "./PilotsTakeOffList.styles";

type PilotsTakeOff = {
  id: string;
  name: string;
};

export const PilotsTakeOffList = ({ pilots }: { pilots: PilotsTakeOff }) => {
  
  if (!Array.isArray(pilots)) {
    return <div>Error: Pilots is not an array</div>;
  }
  
  return (
    <PilotsTakeOffListWrap>      
      <ul>
        {pilots.map((pilot) => (
          <li key={pilot.id}>
            <Link to={pilot.id}>              
              <div>
                {pilot.name}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </PilotsTakeOffListWrap>
  );
}
