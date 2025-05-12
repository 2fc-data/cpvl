
import { RegimentWrap } from "./Regiment.styles"
import pdf from "/src/assets/docs/RI.pdf";

export const Regiment = () => {

  const PDFViewer = () => {

    return (
        <iframe
          src={pdf}
          style={{ width: "100%", height: "400px" }}        
        />
    )
  };

  return (

    <RegimentWrap>
      <div className='regiment-content'>
        <div className="regiment-header">
          <div className="regiment-header-title">Regimento Interno</div>
        </div>

        <div className="regiment-section">
          <div className="regiment-block">
            <div className="regiment-block-title">Regimento Interno</div>
            <div className="regiment-block-text">
              Na Assemblpeia Geral Extraordinária (AGE) de 21 de setembro de
              2023, foram debatido novos tópicos importantes para atualização do
              novo Regimento Interno (RI) do Clube Poçoscaldense de Vôo Livre -
              CPVL.

              O CPVL agradece a todos que contribuíram para a atualização do
              estatuto e reforça que a participação dos associados nas
              assembléias é de extrema importância, pois entende que todos tem
              algo a contribuir com o clube.
            </div>
          </div>
        </div>

        <div className="regiment-section">
          {PDFViewer()}
        </div>
      </div>
    </RegimentWrap>
  )
}
