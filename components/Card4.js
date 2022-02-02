import { AnimateSharedLayout, motion } from 'framer-motion';
import { useState } from 'react';
function Card({ value }) {
  const [open, setOpen] = useState(false);
  return (
    <AnimateSharedLayout>
      {open ? (
        <motion.div
          onClick={() => setOpen(false)}
          className="expanded"
          layoutId="expandable-card"
          style={{ background: value }}
        >
          <motion.h2 className="expanded-card-h" layoutId="expandable-card-h">
            Expanded {value}
          </motion.h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            aliquam molestiae ratione sint magnam sequi fugiat u llam earum
            distinctio fuga iure, ad odit repudiandae modi est alias ipsum
            aperiam. Culpa?
          </p>
        </motion.div>
      ) : (
        <motion.div
          onClick={() => setOpen(true)}
          className="normal"
          layoutId="expandable-card"
          style={{ background: value }}
        >
          <motion.h1 layoutId="expandable-card-h">{value}</motion.h1>
        </motion.div>
      )}
    </AnimateSharedLayout>
  );
}
export default Card;
