import { motion } from 'framer-motion';

export function CallToAction() {
  return (
    <section id="cta" className="py-20 bg-red-600">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Engines?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your racing birthday experience today and create memories that'll last a lifetime!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-red-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Book Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}