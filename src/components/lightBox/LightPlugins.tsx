/** @format */

import { Dispatch, FC, SetStateAction } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Captions, Thumbnails } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "./lightbox-custom.css"; // Import the custom CSS

type Slide = {
  src: string;
  title: string;
  description: string;
  width: number;
  height: number;
  identifier: string;
};

type Props = {
  index: string; // Mengubah tipe index menjadi string untuk mendukung identifier
  setIndex: Dispatch<SetStateAction<string>>; // Mengubah tipe ini agar sesuai dengan tipe string
  slides: Slide[]; // Tipe data array dari objek Slide
};

const LightPlugins: FC<Props> = ({ index, setIndex, slides }) => {
  const slideIndex = slides?.findIndex(
    (slide: Slide) => slide.identifier === index
  );

  return (
    <Lightbox
      index={slideIndex >= 0 ? slideIndex : 0}
      slides={slides}
      open={slideIndex >= 0}
      close={() => setIndex("-1")} // Menggunakan string "-1" karena tipe index adalah string
      plugins={[Thumbnails, Captions]}
    />
  );
};

export default LightPlugins;
