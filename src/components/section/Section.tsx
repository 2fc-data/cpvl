import { Link } from "react-router-dom";
import { SectionWrap } from "./Section.styles";

export const Section = () => {
  return (
    <SectionWrap>
      <div className="section-content">
        <div className="section-title">Espaço Aéreo</div>
        <div className="section-description">
          Desde 1986, o Código Brasileiro de Aeronáutica estabelece que o aerodesporto deverá ser praticado em áreas determinadas pela autoridade aeronáutica.
        </div>
        <div className="section-link">
          <Link to="/airspace">Saiba mais</Link>
        </div>
      </div>

      <div className="section-content">
        <h3 className="section-title">Estatuto</h3>
        <div className="section-description">
          O Clube Poçoscaldense de Vôo Livre - CPVL tem um novo Estatuto aprovado na gestão 2024/2025
        </div>
        <div className="section-link">
          <Link to="/statute">Saiba mais</Link>
        </div>
      </div>
      
      <div className="section-content">
        <h3 className="section-title">Regimento Interno</h3>
        <div className="section-description">
          Na assemblpeia Geral Extraordinária (AGE) de setembro de 2024, foram debatido novos tópicos importantes para atualização do novo Regimento Interno.
        </div>
        <div className="section-link">
          <Link to="/regiment">Saiba mais</Link>
        </div>
      </div>

    </SectionWrap >
  )
}
