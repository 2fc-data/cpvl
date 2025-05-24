import { motion, useScroll, useTransform } from 'framer-motion';
import { HomeWrap } from "./Home.styles"

export const Home = () => {
  const { scrollY } = useScroll();

  const yRampa = useTransform(scrollY, [0, 200], [0, -100]);
  const opacityRampa = useTransform(scrollY, [0, 200, 300, 500], [1, 0.5, 0.5, 0]);

  const yTitle = useTransform(scrollY, [0, 200, 300, 500], [-800, -850, -850, -600]);
  const scaleTitle = useTransform(scrollY, [0, 300], [1, 1.2]);

  const ySubTitle = useTransform(scrollY, [0, 200, 300, 500], [-800, -850, -850, -600]);
  const scaleSubTitle = useTransform(scrollY, [0, 300], [1, 1.5]);

  return (
    <HomeWrap>
      <motion.div className='home-content'
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{ y: yRampa, opacity: opacityRampa }}
        transition={{ duration: 0.6 }}
      />
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

    </HomeWrap>
  )
}

