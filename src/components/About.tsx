import { motion } from 'framer-motion';

export function About() {
  const features = [
    {
      icon: "🏎️",
      title: "Racing Simulators",
      description: "Experience real racing thrills with our professional simulators"
    },
    {
      icon: "🎮",
      title: "Gaming Zone",
      description: "Compete with friends in various racing games"
    },
    {
      icon: "🎂",
      title: "Custom Celebrations",
      description: "Personalized racing-themed party decorations"
    },
    {
      icon: "🏆",
      title: "Race Competitions",
      description: "Win exciting prizes in our mini racing tournaments"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">About The Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We combine the excitement of racing with unforgettable birthday celebrations
            to create a unique experience you'll never forget.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-700 p-6 rounded-lg text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}