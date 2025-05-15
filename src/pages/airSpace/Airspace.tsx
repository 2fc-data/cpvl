import { AirspaceWrap } from "./Airspace.styles"
import { Link } from "react-router-dom"
import pdf from "/src/assets/docs/EspacoAereo.pdf"

export const Airspace = () => {

  return (
    <AirspaceWrap>
      <div className='airspace-content'>
        <div className="airspace-header">
          <div className="airspace-header-title">Espaço aéreo</div>
        </div>

        <div className="airspace-section">

          <div className="airspace-block">
            <div className="airspace-block-title">Espaço Aéreo</div>
            <div className="airspace-block-text">
              Desde 1986, o Código Brasileiro de Aeronáutica estabelece que o
              aerodesporto deverá ser praticado em áreas determinadas pela
              autoridade aeronáutica. É por isso que a prática só é regular
              quando realizada dentro do Espaço Aéreo Condicionado (EAC), em
              áreas geralmente estabelecidas por SBR´s ou NOTAM destinadas ao
              aerodesporto e disponíveis no site do Departamento de Controle de
              Espaço Aéreo (DECEA).

              <br /><br />
              <p>
                <a href="https://www.decea.mil.br/?i=unidades&p=cindacta-i">DECEA Cindacta I</a>
              </p>
            </div>

            <div className="airspace-block-btn">
              <div className="airspace-link">
                <a href={pdf} download>Download</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </AirspaceWrap >
  )
}
