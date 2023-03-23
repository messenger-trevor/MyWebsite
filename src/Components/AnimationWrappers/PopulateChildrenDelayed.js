import { motion } from "framer-motion";

const PopulateChildrenDelayed = (props) => {
  const variants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.ul
      style={{
        listStyle: "none",
        padding: "0",
        display: "flex",
        flexWrap: "wrap",
        gap: ".4rem",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={variants}
    >
      {props.children}
    </motion.ul>
  );
};

export default PopulateChildrenDelayed;
