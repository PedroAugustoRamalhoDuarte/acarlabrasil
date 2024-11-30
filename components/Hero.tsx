"use client";

import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative px-6 lg:px-8 py-24 lg:py-32 bg-gradient-to-b from-[#f0e8db] to-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#cc1300]/10 text-[#cc1300] mb-6">
              <GraduationCap className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Método Comprovado</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Aprendizado acelerado 3.0
            </h1>
            <p className="text-xl leading-8 text-gray-700 mb-8">
              Desbloqueie seu potencial máximo de aprendizado com técnicas comprovadas
              de aceleração cognitiva. Aprenda mais rápido, memorize melhor e alcance
              seus objetivos educacionais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#pricing"
                className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-[#cc1300] text-white font-semibold hover:bg-[#a81000] transition-colors duration-200"
              >
                Começar Agora
                <span className="ml-2">→</span>
              </Link>
              <Link
                href="#about"
                className="inline-flex justify-center items-center px-6 py-3 rounded-lg border-2 border-[#cc1300] text-[#cc1300] font-semibold hover:bg-[#cc1300]/10 transition-colors duration-200"
              >
                Saiba Mais
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl bg-white shadow-xl p-8 transform rotate-2">
              <div className="absolute -top-4 -right-4 bg-[#cc1300] text-white px-6 py-2 rounded-full">
                66% OFF
              </div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
                alt="Students learning"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}