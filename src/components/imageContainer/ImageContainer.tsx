import {
  ImageContainerWrap,
  ImageDescription
} from "./ImageContainer.styles";

interface ImageContainerProps {
  imageSource: string;
  description: string;
}

export const ImageContainer = ({ imageSource, description }: ImageContainerProps) => {
  return (
    <ImageContainerWrap>
      <img src={imageSource} alt="alt text" />
      <ImageDescription>
        {description}      
      </ImageDescription>
        
    </ImageContainerWrap >
  )
}