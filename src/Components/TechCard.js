import classes from "./TechCard.module.css";
import { motion } from "framer-motion";

const TechCard = (props) => {
  const variant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.img
      className={classes.techCard}
      key={props.key}
      src={props.image}
      alt={props.altText}
      title={props.altText}
      variants={variant}
    />
  );
};

export default TechCard;
