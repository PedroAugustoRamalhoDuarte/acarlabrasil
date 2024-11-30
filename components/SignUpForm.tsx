"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 px-6 lg:px-8 bg-[#f0e8db]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comece Sua Jornada de Aprendizado
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Inscreva-se agora e receba dicas exclusivas sobre aprendizado acelerado
              diretamente no seu e-mail.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor e-mail"
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#cc1300] focus:border-transparent transition-all duration-200"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full mt-4 bg-[#cc1300] text-white font-semibold py-4 px-6 rounded-xl hover:bg-[#a81000] transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span>Quero Aprender Mais Rápido</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 rounded-xl p-6 text-center max-w-md mx-auto"
            >
              <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                Inscrição Confirmada!
              </h3>
              <p className="text-green-600">
                Obrigado pelo interesse! Em breve você receberá nossas dicas exclusivas.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}