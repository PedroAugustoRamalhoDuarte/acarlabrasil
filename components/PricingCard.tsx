"use client";

import { motion } from "framer-motion";
import { Check, Lock } from "lucide-react";
import Link from "next/link";

const features = [
  "Acesso a +30 vídeos HD sobre técnicas de aprendizado",
  "Mais de 20 exercícios práticos",
  "Material didático digital completo",
  "Certificado de conclusão"
];

const bonusFeatures = [
  "Mini curso de Técnicas de Memorização",
  "Suporte de dúvidas com a equipe"
];

export default function PricingCard() {
  const scrollToSignup = (e: React.MouseEvent) => {
    e.preventDefault();
    const signupSection = document.getElementById('signup');
    signupSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 px-6 lg:px-8 bg-white" id="pricing">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#f0e8db] rounded-3xl overflow-hidden border border-neutral-200"
        >
          <div className="p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
              Aprendizado Acelerado 3.0
            </h2>
            <div className="flex justify-center items-baseline gap-2 mb-8">
              <span className="text-5xl md:text-6xl font-bold">R$100</span>
              <span className="text-lg text-gray-500 line-through">R$300</span>
            </div>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="font-semibold mb-4">O que você vai receber:</h3>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#cc1300] shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Bônus Exclusivos:</h3>
                <ul className="space-y-3">
                  {bonusFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-[#cc1300]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-[#cc1300]" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <Link
                href="#signup"
                onClick={scrollToSignup}
                className="block w-full bg-[#cc1300] text-white text-center font-semibold py-4 rounded-xl hover:bg-[#a81000] transition-colors duration-200"
              >
                Começar Agora - R$100
              </Link>
              <Link
                href="#signup"
                onClick={scrollToSignup}
                className="block w-full bg-white text-[#cc1300] text-center font-semibold py-4 rounded-xl border-2 border-[#cc1300] hover:bg-[#cc1300]/5 transition-colors duration-200"
              >
                3x de R$33,33 sem juros
              </Link>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-600">
              <Lock className="h-4 w-4" />
              <span>Pagamento 100% seguro via SSL</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}