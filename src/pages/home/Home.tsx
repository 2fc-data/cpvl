import { motion, useScroll, useTransform } from 'framer-motion';
import { HomeWrap } from "./Home.styles"

export const Home = () => {
  const { scrollY } = useScroll();

  const yCity = useTransform(scrollY, [0, 200], [0, -100]);
  const opacityCity = useTransform(scrollY, [0, 200, 300, 950], [1, 0.5, 0.5, 0]);

  const yTitle = useTransform(scrollY, [0, 200, 300, 500], [0, 200, 400, 450]);
  const scaleTitle = useTransform(scrollY, [0, 300], [0.9, 1.2]);

  const ySubTitle = useTransform(scrollY, [0, 200, 300, 500], [0, 200, 400, 450]);
  const scaleSubTitle = useTransform(scrollY, [0, 300], [1, 2.1]);

  return (
    <HomeWrap>
      <motion.div className='home-content'
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{ y: yCity, opacity: opacityCity }}
        transition={{ duration: 0.6 }}
      >
        <motion.div className="home-title"
          style={{ scale: scaleTitle, y: yTitle }}
        >
          Clube Poços-caldense de Vôo Livre
        </motion.div>
        <motion.div className="home-subtitle"
          style={{ scale: scaleSubTitle, y: ySubTitle }}
        >
          desde 1995
        </motion.div>
      </motion.div>
    </HomeWrap>
  )
}

