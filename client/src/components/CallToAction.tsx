import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section
      id="contact"
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-lines opacity-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl p-1">
          <div className="bg-card rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Ready to transform into a Juggernaut?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Connect with us. Help us understand your vision with AI and we'll
              help you build it.
            </p>

            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold h-auto"
            >
              <a
                href="https://juggernot-ai.notion.site/Juggernot-Form-1d7fe7cd64fe80f6801feae3e074a395?pvs=4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get In Touch
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
