import { motion } from "motion/react";
import Button from "./Button";
export default function TitleBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="flex flex-col items-center justify-center text-white"
    >
      <h1 className="text-5xl font-bold">Lorem ipsum dolor sit amet.</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi optio
        eius exercitationem, sint molestias cumque.
      </p>
      <Button />
    </motion.div>
  );
}
