import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ImageContainer } from "../imageContainer";

import {
  HorizontalScrollWrap,
  ContentContainer,
  Images,
  ImagesItem
} from "./HorizontalScroll.styles";
import img_1 from '../../assets/images/carousel/se1.jpg';

// import img_2 from '../../assets/images/carousel/rampanorteAprox1.jpg';

export const HorizontalScroll = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "center start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["75%", "-120%"]);

  const initial = { opacity: 0, y: 150 };
  const whileInView = { opacity: 1, y: 0, shapeImageThreshold: 0.99 };
  const transition = { duration: 0.5, ease: "easeOut" };

  return (
    <HorizontalScrollWrap>
      <ContentContainer ref={targetRef}>

        <motion.div style={{ x }}>
          <Images>

            <motion.div
              initial={initial}
              whileInView={whileInView}
              transition={transition}
            >
              <ImagesItem>
                <ImageContainer
                  imageSource={img_1}
                  description={"Imagem 1"}
                />
              </ImagesItem>
            </motion.div>


            <motion.div
              initial={initial}
              whileInView={whileInView}
              transition={transition}
            >
              <ImagesItem>
                <ImageContainer
                  imageSource={img_1}
                  description={"Imagem 2"}
                />
              </ImagesItem>
            </motion.div>

            <motion.div
              initial={initial}
              whileInView={whileInView}
              transition={transition}
            >
              <ImagesItem>
                <ImageContainer
                  imageSource={img_1}
                  description={"Imagem 3"}
                />
              </ImagesItem>
            </motion.div>

            <motion.div
              initial={initial}
              whileInView={whileInView}
              transition={transition}
            >
              <ImagesItem>
                <ImageContainer
                  imageSource={img_1}
                  description={"Imagem 4"}
                />
              </ImagesItem>
            </motion.div>
          </Images>
        </motion.div>

      </ContentContainer >
    </HorizontalScrollWrap >
  )
}
