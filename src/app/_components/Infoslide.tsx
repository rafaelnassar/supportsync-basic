import Image from "next/image";

import { motion } from "framer-motion";

interface InfoSlideProps {
  title: string;
  description: string;
  imageSrc: string;
}

export function InfoSlide({ title, description, imageSrc }: InfoSlideProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center w-full max-w-4xl mx-auto p-4 md:p-6"
    >
      <div className="w-full max-w-md mb-6">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          width={400}
          height={300}
          className="rounded-lg object-cover w-full h-auto"
        />
      </div>
      <div className="w-full text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
          {title}
        </h2>
        <p className="text-base md:text-lg text-muted-foreground">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
