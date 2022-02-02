import { useState, useEffect } from 'react';
import { AnimateSharedLayout, motion } from 'framer-motion';
import card from './styles/Card.module.css'; // Card Styles in Module CSS

// Card Component
export default function Card({ details }) {
  // useState para manejar el estado
  // de la expansión del Card
  const [open, setOpen] = useState(false);

  const { name, breed, born } = details;
  return (
    <AnimateSharedLayout>
      {open ? (
        <motion.div
          className={card.expanded}
          onClick={() => setOpen(false)}
          layoutId="expandable-card"
        >
          <motion.h1
            className={card.expanded_name}
            layoutId="expandable-card-h"
          >
            {name}
          </motion.h1>
        </motion.div>
      ) : (
        <motion.div
          className={card.normal}
          onClick={() => setOpen(true)}
          layoutId="expandable-card"
        >
          <motion.h1 className={card.normal_name} layoutId="expandable-card-h">
            {name}
          </motion.h1>
        </motion.div>
      )}
    </AnimateSharedLayout>
  );
}
