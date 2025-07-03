// import { Link } from "react-router-dom"
import { StatuteWrap } from "./Statute.styles"
import pdf from "/src/assets/docs/Estatuto2016.pdf";

export const Statute = () => {

  return (
    <StatuteWrap>
      <div className='statute-content'>
        <div className="statute-header">
          <div className="statute-header-title">Estatuto</div>
        </div>

        <div className="statute-section">

          <div className="statute-block">
            <div className="statute-block-title">Estatuto</div>
            <div className="statute-block-text">
              Na Assemblpeia Geral Extraordinária (AGE) de 20 de novembro de
              2023, foram definidos os tópicos, anteriormente debatidos na AGE
              de 21/09/2023, e assim o Clube Poçoscaldense de Vôo Livre - CPVL
              tem um novo Estatuto aprovado na gestão 2022/2023 e então
              registrado no cartório em 21 de novembro de 2023.
              O CPVL agradece a todos que contribuíram para a atualização do
              estatuto e reforça que a participação dos associados nas
              assembléias é de extrema importância, pois entende que todos tem
              algo a contribuir com o clube.
            </div>

            <div className="statute-block-btn">
              {/* <div className="statute-link">
                <Link to="https://www.decea.mil.br/?i=unidades&p=cindacta-i">DECEA Cindacta I</Link>
              </div> */}
              <div className="statute-link">
                <a href={pdf} download>Download</a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </StatuteWrap>
  )
}
