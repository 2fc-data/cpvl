import { motion } from 'framer-motion';
import { HomeWrap } from "./Home.styles"

export const Home = () => {

  const zoomVariantImg = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.01,
    },
  }

  return (
    <HomeWrap>
      <motion.div className='home-content'        
        transition={{ duration: 1 }}
        variants={zoomVariantImg}
        whileHover="hover"
      >

        <motion.div className="home-title">
          Clube Poços-caldense de Vôo Livre
        </motion.div>

        <motion.div className="home-subtitle">
          desde 1995
        </motion.div>

      </motion.div>
    </HomeWrap>
  )
}

