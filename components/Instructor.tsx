"use client";

import { motion } from "framer-motion";
import { Award, Youtube, BookOpen } from "lucide-react";

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
                <img
                  src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80"
                  alt="Carla Brasil"
                  className="w-full h-[500px] object-cover"
                />
              </motion.div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <Award className="h-12 w-12 text-[#cc1300]" />
                  <div className="text-left">
                    <p className="text-sm text-gray-600">Experiência</p>
                    <p className="text-xl font-bold">+10 anos</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Carla Brasil</h2>
              <p className="text-lg text-gray-700 mb-8">
                Especialista em aprendizado acelerado e metodologias inovadoras de ensino.
                Com mais de uma década de experiência, já ajudou milhares de alunos a
                transformarem sua forma de aprender.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <Youtube className="h-6 w-6 text-[#cc1300] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Canal no YouTube</h3>
                    <p className="text-gray-600">+500mil inscritos</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <BookOpen className="h-6 w-6 text-[#cc1300] mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Alunos</h3>
                    <p className="text-gray-600">+50mil formados</p>
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