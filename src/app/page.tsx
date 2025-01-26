"use client";

import { useState, useEffect } from "react";

import { InfoSlide } from "@/app/_components/Infoslide";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const appInfo = [
  {
    title: "Praticidade",
    description: "Acesse seus atendimentos de forma rápida e eficiente.",
    imageSrc: "/images/index_1.svg",
  },
  {
    title: "Integração Perfeita",
    description:
      "Integre seus sistemas de atendimento e gerenciamento de clientes.",
    imageSrc: "/images/index_2.svg",
  },
  {
    title: "Mantenha-se Organizado",
    description: "Acompanhe os atendimentos de forma rápida e eficiente.",
    imageSrc: "/images/index_3.svg",
  },
  {
    title: "Colabore sem Esforço",
    description: "Colabore com os atendimentos de forma rápida e eficiente.",
    imageSrc: "/images/index_4.svg",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % appInfo.length);
    }, 5000); // Muda o slide a cada 5 segundos

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex flex-col min-h-screen items-center justify-between bg-background text-foreground">
      <div className="flex flex-1 flex-col items-center justify-center w-full max-w-4xl p-4 text-center">
        <AnimatePresence mode="wait">
          <InfoSlide key={currentSlide} {...appInfo[currentSlide]} />
        </AnimatePresence>
        <div className="flex justify-center mt-4 space-x-2">
          {appInfo.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? "bg-primary" : "bg-muted-foreground/20"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background shadow-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="w-full max-w-xl mx-auto"
        >
          <Button size="lg" className="w-full text-lg px-6 py-3 rounded-full">
            Começar Agora
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </main>
  );
}
