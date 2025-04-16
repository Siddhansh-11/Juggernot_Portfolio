import { motion } from "framer-motion";
import { servicesData } from "../data/servicesData";

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The only <span className="gradient-text">AI toolbox</span> you'll ever need
          </h2>
          <p className="text-gray-300">
            From conversational AI agents to co-pilots, unlock endless possibilities to transform your business
          </p>
        </div>

        <div className="flex flex-wrap gap-6 justify-center mb-8">
          <span className="bg-card border border-border/20 px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            Highly Intelligent
          </span>
          <span className="bg-card border border-border/20 px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Cost-Effective
          </span>
          <span className="bg-card border border-border/20 px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            Easy Monitoring
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ backgroundColor: "#181818" }}
              className="service-card rounded-xl border border-border/20 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
              </div>
              
              <p className="text-gray-400 mb-4">{service.description}</p>
              
{/* Image placeholders hidden for now - will be added later */}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
