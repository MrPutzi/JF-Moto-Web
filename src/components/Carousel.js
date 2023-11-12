import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Carousel = () => {
  const images = [
"https://i.ibb.co/Y30jxKJ/carousel.jpg" ,
"https://i.ibb.co/yWfFMm6/carousel1.jpg" ,
"https://i.ibb.co/8NPQn1D/carousel2.jpg"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="h-96 sm:h-64 xl:h-80 2xl:h-96">
      <AnimatePresence initial={false} custom={currentImage} mode='wait'>
  <motion.div
    key={currentImage}
    className="flex h-full items-center justify-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <img src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />
  </motion.div>
</AnimatePresence>

    </div>
  );
};

export default Carousel;
