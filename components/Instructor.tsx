"use client";

import { motion } from "framer-motion";
import { Award, Youtube, BookOpen } from "lucide-react";
import Image from "next/image";

export default function Instructor() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white" id="about">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-[#f0e8db] rounded-3xl p-8 lg:p-12 overflow-hidden relative"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl overflow-hidden"
              >
                <Image
                  src="/images/profile.png"
                  width={500}
                  height={500}
                  alt="Carla Brasil"
                  className="w-full h-[500px] object-cover"
                />
              </motion.div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <Award className="h-12 w-12 text-[#cc1300]" />
                  <div className="text-left">
                    <p className="text-sm text-gray-600">Visualizações</p>
                    <p className="text-xl font-bold">+1M de views</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Carla Brasil</h2>
              <p className="text-lg text-gray-700 mb-8">
              Olá, meu nome é Carla Brasil, e sou escritora, bacharel em Direito, produtora de conteúdo e uma curiosa sobre o mundo à minha volta. Venho de Santarém, do interior do Pará, de uma família humilde, que sempre valorizou o estudo como caminho para o sucesso. 
              </p>

              <p className="text-lg text-gray-700 mb-8">
              Aos 17 anos, fui aprovada em Medicina (UEPA) e dentro das vagas no SISU de Direito, dentre outras, na UnB, USP e UFSC. Escolhi cursar Direito na UnB, mudei para Brasília e aos 21 anos alcancei outra grande vitória: fui aprovada no meu primeiro concurso público. 

Toda essa trajetória me ensinou lições valiosas sobre técnicas eficazes de estudos, aprendizado acelerado e estratégias (nem sempre óbvias) sobre o que, de fato, funciona.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <Youtube className="h-6 w-6 text-[#cc1300] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Canal no YouTube</h3>
                    <p className="text-gray-600">+15mil inscritos</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <BookOpen className="h-6 w-6 text-[#cc1300] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Instagram</h3>
                    <p className="text-gray-600">+22mil seguidores</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}