import { useState, useEffect } from 'react';
import { AnimateSharedLayout, motion } from 'framer-motion';
import card from './styles/Card.module.css'; // Card Styles in Module CSS

// Card Component
export default function Card({ details }) {
  // useState para manejar el estado
  // de la expansión del Card
  const [open, setOpen] = useState(false);

  const { name, breed, born, desc, size, imgClass, img } = details;
  return (
    <AnimateSharedLayout>
      {open ? (
        <motion.div
          className={`${card.expanded}`}
          onClick={() => setOpen(false)}
          layoutId="expandable-card"
        >
          <motion.h2
            className={card.expanded_name}
            layoutId="expandable-card-h"
          >
            {name}
          </motion.h2>
          <div className={card.expanded_description}>
            <h3>{name}</h3>
            <div className={card.expanded_description__table}>
              <p>{breed}</p>
              <p>{size}</p>
              <p>{born}</p>
            </div>
            <div className={card.expanded_description__txt}>
              <p>{desc}</p>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          className={card.normal}
          style={
            img
              ? {
                  background: `url(${img})  no-repeat center`,
                  backgroundSize: `cover`,
                }
              : {
                  background: 'black',
                }
          }
          onClick={() => setOpen(true)}
          layoutId="expandable-card"
        >
          <motion.h2 className={card.normal_name} layoutId="expandable-card-h">
            {name}
          </motion.h2>
        </motion.div>
      )}
    </AnimateSharedLayout>
  );
}
