import { motion, useScroll, useTransform } from 'framer-motion';
import { HomeWrap } from "./Home.styles"

export const Home = () => {
  const { scrollY } = useScroll();

  const yRampa = useTransform(scrollY, [0, 0], [0, 0]);
  const opacityRampa = useTransform(scrollY, [0, 0, 0, 0], [1, 1, 1, 1]);

  // const yTitle = useTransform(scrollY, [0, 200, 300, 500], [-800, -850, -850, -600]);
  // const scaleTitle = useTransform(scrollY, [0, 300], [1, 1.2]);

  // const ySubTitle = useTransform(scrollY, [0, 200, 300, 500], [-800, -850, -850, -600]);
  // const scaleSubTitle = useTransform(scrollY, [0, 300], [1, 1.5]);

  return (
    <HomeWrap>
      <motion.div className='home-content'
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{ y: yRampa, opacity: opacityRampa }}
        transition={{ duration: 0.6 }}
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

