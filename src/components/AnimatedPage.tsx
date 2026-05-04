import type { ReactNode } from "react";
import { motion } from "framer-motion";

type AnimatedPageProps = {
  children: ReactNode;
  className?: string;
};

export default function AnimatedPage({ children, className = "" }: AnimatedPageProps) {
  return (
    <motion.main
      className={className}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.main>
  );
}
