import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function JFCard() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeIn = {
    hidden: { opacity: 0, transition: { duration: 2 } },
    visible: { opacity: 1, transition: { duration: 2 } },
  };

  const scrollEffect = {
    hidden: { y: 100, opacity: 0, transition: { duration: 2 } },
    visible: { y: 0, opacity: 1, transition: { duration: 2} },
  };

  return (
<div className=" -h-96">
      <article className= "backdrop-brightness-125 backdrop-blur-2xl backdrop-opacity-60">
          <div className=" max-w-4xl text-center">
            <motion.h1
              className="text-4xl font-extrabold antialiased text-white dark:text-white sm:text-5xl md:text-6xl mt-20"
              variants={fadeIn}
              initial="hidden"
              animate={controls}
              ref={ref}
            >
              <span className="block">Welcome to</span>{' '}
              <span className="block text-red-600">JFMoto</span>
            </motion.h1>
            <motion.p
              className="text-xl mt-6 text-white antialiased inset-x-12 dark:text-gray-200"
              variants={scrollEffect}
              initial="hidden"
              animate={controls}
              ref={ref}
            >
              JFMoto is a Slovak company that has been operating on the Slovak
              market since 2004. We are a direct importer of CFMOTO ATV as well as  motorcycles.
              We also import spare parts and accessories for the brands.
            </motion.p>
          </div>
      </article>
    </div>
  );
}


export default JFCard
