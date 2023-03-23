import { motion } from "framer-motion";

const FlyInTop = (props) => {
  const variant = {
    onscreen: { opacity: 1, y: 0, transition: { type: 'spring', bounce: .4, duration: 1.5 } },
    offscreen: { opacity: 0, y: 100 },
  };

  return (
    <motion.div initial="offscreen" whileInView="onscreen" viewport ={{once: true, amount: 0.8}} variants={variant}>
      {props.children}
    </motion.div>
  );
};

export default FlyInTop;
