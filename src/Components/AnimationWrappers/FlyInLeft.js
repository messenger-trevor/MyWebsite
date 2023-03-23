import { motion } from "framer-motion";

const FlyInLeft = (props) => {
  const variant = {
    onscreen: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", bounce: 0.4, duration: 1.5 },
    },
    offscreen: { opacity: 0, x: 100 },
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 1 }}
      variants={variant}
    >
      {props.children}
    </motion.div>
  );
};

export default FlyInLeft;
