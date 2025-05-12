import { AboutWrap } from "./About.styles.ts"

export const About = () => {
  return (
    <AboutWrap className='about-content'>
      <div className="about-header">
        <div className="about-header-title">Nossa história</div>
      </div>

      <div className="about-section">
        <div className="about-block">
          <p className="about-block-title">História CPVL</p>
          <div className="about-block-text">
            Paulo Sérgio Trevisan, em 1976, um garoto aventureiro, inteligente e
            ousado, natural da nossa querida Poços de Caldas, decidiu realizar
            seu sonho de voar. Sempre com muita admiração ele abservava e
            desfrutava da serra de são Domingos, a qual se localiza do lado
            norte da cidade, e um belo dia percebeu que ja tinha o local de
            decolagem, só faltava a asa.</div>

          <div className="about-block-text">
            Em 12/12/1976 Paulo Sérgio Trevisan fez sua própria decolagem de
            Asa Delta na rampa Sul (quadrantes S e SE) da Serra de São
            Domingos local denominado hoje rampa do Arteninho, em homenagem ao
            piloto Artenio Z. Filho. Do lado oposto, obviamente temos a
            rampa Norte denominada rampa do Baiano (quadrante N e NE) em
            homenagem ao nosso amigo Paulo S Trevisan.
          </div>

          <div className="about-block-text">
            Em 1992 Luís Pasquale começou a voar de Parapente, em 1993 formou
            a primeira turma de pilotos de Parapente e em 1995 já com 20
            alunos, fundou o Clube Poçoscaldense de Vôo Livre - CPVL.
          </div>

          <div className="about-block-text">
            No início de 2023, o nosso espaço de decolagens, antes um lugar
            público, se tornou uma concessão da empresa CITUR, a qual trouxe
            inovações e melhorias na infra-estrutura da rampa norte.
          </div>
        </div>

        <div className="about-block">
          <div className="about-block-img" />
        </div>
      </div>
    </AboutWrap >
  )
}
