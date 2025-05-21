import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { HomeWrap } from "./Home.styles"
import { useEffect } from "react";

const COLORS = ["rgba(224, 226, 68, 0.5)", "rgba(71, 210, 245, 0.5)", "rgba(142, 68, 226, 0.5)", "rgba(245, 112, 71, 0.5)"];

export const Home = () => {

  const color = useMotionValue(COLORS[0]);

  const backgroundImage = useMotionTemplate`radial-gradient
  (125% 125% at 50% 0%, rgba(194, 214, 219, 0.5), ${color})`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'reverse'
    })
  }, [])

  return (
    <HomeWrap>
      <motion.section
        style={{ backgroundImage }}
      >
        <div className='home-content'>
          <div className="home-title">
            Clube Poços-caldense de Vôo Livre
          </div>
          <div className="home-subtitle">
            desde 1995
          </div>
        </div>
      </motion.section>


    </HomeWrap>
  )
}

