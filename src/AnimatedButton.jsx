import { motion } from "framer-motion";

export default function AnimatedButton({ children, onClick }) {

  return (
    <motion.button
      whileHover={{ scale: 0.95, backgroundColor: "#ff6b6b" }}
      whileTap={{ scale: 0.9 }}
      className={`btn red-bg text-white w-100`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
