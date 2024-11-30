"use client";

import { Brain, Clock, Target, Users } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Brain,
    title: "Técnicas Cognitivas Avançadas",
    description: "Aprenda métodos cientificamente comprovados para otimizar sua capacidade de aprendizado."
  },
  {
    icon: Clock,
    title: "Resultados Rápidos",
    description: "Reduza pela metade o tempo necessário para dominar novos conhecimentos e habilidades."
  },
  {
    icon: Target,
    title: "Metodologia Focada",
    description: "Sistema estruturado para maximizar a retenção e aplicação prática do conhecimento."
  },
  {
    icon: Users,
    title: "Transforme o Estudo em uma Experiência Prazerosa",
    description: "As técnicas ensinadas ajudam a tornar o aprendizado mais leve, eficiente e até divertido."
  }
];

export default function Benefits() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que escolher nosso método?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Desenvolvemos um sistema completo que combina as mais recentes descobertas
            em neurociência com técnicas práticas de aprendizado.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-white hover:bg-[#cc1300] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[#cc1300] group-hover:bg-white transition-colors duration-300 rounded-t-2xl" />
              <benefit.icon className="h-12 w-12 text-[#cc1300] group-hover:text-white mb-6 transition-colors duration-300" />
              <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}