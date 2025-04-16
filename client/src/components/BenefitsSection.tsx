import { motion } from "framer-motion";
import { benefitsData } from "../data/benefitsData";

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 bg-background relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6"
      >
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Maximum Efficiency</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our AI agents work around the clock, handling repetitive tasks and complex queries 
            with precision and speed that traditional solutions can't match.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefitsData.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl border border-border/20 p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="rounded-full bg-accent/20 p-3">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold">{benefit.title}</h3>
              </div>
              <h4 className="text-lg font-semibold mb-3">{benefit.percentage}</h4>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
