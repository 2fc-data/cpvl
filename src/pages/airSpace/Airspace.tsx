import { AirspaceWrap } from "./Airspace.styles"
import { Link } from "react-router-dom"
import pdf from "/src/assets/docs/EspacoAereo.pdf"

export const Airspace = () => {

  const PDFViewer = () => {

    return (
      <iframe
        src={pdf}
        style={{ width: "100%", height: "600px" }}
      />
    )
  };

  return (
    <AirspaceWrap>
      <div className='airspace-content'>
        <div className="airspace-header">
          <div className="airspace-header-title">Espaço aéreo</div>
        </div>

        <div className="airspace-section">
          <div className="airspace-block">
            <p className="airspace-block-title">Espaço Aéreo</p>
            <div className="airspace-block-text">
              Desde 1986, o Código Brasileiro de Aeronáutica estabelece que o
              aerodesporto deverá ser praticado em áreas determinadas pela
              autoridade aeronáutica. É por isso que a prática só é regular
              quando realizada dentro do Espaço Aéreo Condicionado (EAC), em
              áreas geralmente estabelecidas por SBR´s ou NOTAM destinadas ao
              aerodesporto e disponíveis no site do Departamento de Controle de
              Espaço Aéreo (DECEA)</div>
          </div>

          <div className="airspace-block-btn">
              <div className="airspace-link">
                <Link to="https://www.decea.mil.br/?i=unidades&p=cindacta-i">DECEA Cindacta I</Link>
              </div>
          </div>
        </div>

        <div className="airspace-section">
          {PDFViewer()}
        </div>
      </div>
    </AirspaceWrap >
  )
}
