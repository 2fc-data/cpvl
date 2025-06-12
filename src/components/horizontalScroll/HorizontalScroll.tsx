import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ImageContainer } from "../imageContainer";

import {
  HorizontalScrollWrap,
  ContentContainer,
  Images,
  ImagesItem
} from "./HorizontalScroll.styles";

import img_01 from '../../assets/images/carousel/hero_01.jpg';
import img_02 from '../../assets/images/carousel/hero_02.jpg';
import img_03 from '../../assets/images/carousel/hero_03.jpg';
import img_04 from '../../assets/images/carousel/hero_04.jpg';
import img_05 from "../../assets/images/carousel/hero_05.jpg";
import img_06 from '../../assets/images/carousel/hero_06.jpg';
import img_07 from '../../assets/images/carousel/hero_07.jpg';
import img_08 from '../../assets/images/carousel/hero_08.jpg';
import img_09 from '../../assets/images/carousel/hero_09.jpg';
import img_10 from "../../assets/images/carousel/hero_10.jpg";
import img_11 from '../../assets/images/carousel/hero_11.jpg';
import img_12 from '../../assets/images/carousel/hero_12.jpg';

const img = [
  img_01,
  img_02,
  img_03,
  img_04,
  img_05,
  img_06,
  img_07,
  img_08,
  img_09,
  img_10,
  img_11,
  img_12
]

export const HorizontalScroll = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "center start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["45%", "-100%"]);

  const initial = { opacity: 0, y: 150 };
  const whileInView = { opacity: 1, y: 0, shapeImageThreshold: 0.99 };
  const transition = { duration: 0.6, ease: "easeOut" };

  return (
    <HorizontalScrollWrap>
      <ContentContainer ref={targetRef}>

        <motion.div style={{ x }}>
          <Images>

            {img.map((imgSrc, index) => (
              <motion.div
                key={index}
                initial={initial}
                whileInView={whileInView}
                transition={transition}
              >
                <ImageContainer
                  imageSource={imgSrc}
                  description={""}
                />
              </motion.div>
            ))}

          </Images>
        </motion.div>

      </ContentContainer >
    </HorizontalScrollWrap >
  )
}
