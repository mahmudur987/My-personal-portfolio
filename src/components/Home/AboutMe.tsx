import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedDescription from "../animation/AnimatedDescription";

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center items-center"
        >
          {/* About Text */}
          <div className="space-y-16">
            <h2 className="text-4xl font-bold">About Me</h2>
            <AnimatedDescription />

            {/* Highlight Cards */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { title: "2+", text: "Years Experience" },
                { title: "10+", text: "Projects Built" },
                { title: "100%", text: "Passion for Code" },
              ].map((stat, i) => (
                <Card
                  key={i}
                  className="text-center rounded-2xl shadow-md border transform hover:scale-105 hover:border-primary transition-transform duration-300 ease-in-out"
                >
                  <CardContent className="p-4">
                    <p className="text-2xl font-bold">{stat.title}</p>
                    <p className="text-sm text-muted-foreground">{stat.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Tech Badges */}
            <div>
              <p className="font-semibold mb-6 text-2xl my-5">Tech I Love:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "TailwindCSS",

                  "TypeScript",
                  "GraphQL",
                  "Redux",
                  "Nest.js",
                  "Vue.js",
                ].map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="px-3 py-1 text-xl"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
