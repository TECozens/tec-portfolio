import { motion } from 'framer-motion';
import { chakra } from '@chakra-ui/react';

const MotionBox = chakra(motion.div);

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
};

export const PageTransition = ({ children }) => {
  return (
    <MotionBox
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{
        position: "absolute",
        width: "100%",
        paddingBottom: "2rem"
      }}
    >
      {children}
    </MotionBox>
  );
}; 