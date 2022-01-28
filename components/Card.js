import { useState, useEffect } from 'react';
import { AnimateSharedLayout, AnimateShareLayout, motion } from 'framer-motion';
import styled from 'styled-components';

// Card main styles
const CardStyles = styled.div`
  display: block;
  height: 250px;
  width: 250px;
  border-radius: 10px;
  background: black;
  position: relative;
  cursor: pointer;
  .card__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: none;
    border-radius: 10px;
  }
  .card__name {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 65px;
    border-radius: 0 0 10px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
`;

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
          className="expanded-card"
          onClick={() => setOpen(false)}
          layoutId="expandable-card"
        >
          <motion.h1
            className="expanded-card__name"
            layoutId="expandable-card-h"
          >
            {name}
          </motion.h1>
        </motion.div>
      ) : (
        <motion.div
          className="normal-card"
          onClick={() => setOpen(true)}
          layoutId="expandable-card"
        >
          <motion.h1 className="normal-card__name" layoutId="expandable-card-h">
            {name}
          </motion.h1>
        </motion.div>
      )}
    </AnimateSharedLayout>
  );
}
