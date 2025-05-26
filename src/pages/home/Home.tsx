import { motion } from 'framer-motion';
import { HomeWrap } from "./Home.styles"

export const Home = () => {

  const zoomVariant = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.06,
    },
  }

  return (
    <HomeWrap>
      <motion.div className='home-content'
        initial="hidden"
        transition={{ duration: 3 }}
        variants={zoomVariant}
        whileHover="hover"
      >

        <div className="home-title">
          Clube Poços-caldense de Vôo Livre
        </div>

        <div className="home-subtitle">
          desde 1995
        </div>

      </motion.div>

    </HomeWrap>
  )
}

