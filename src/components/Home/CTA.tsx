import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CTA() {
  return (
    <motion.section
      className="relative flex justify-center items-center py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-20 blur-3xl rounded-3xl" />

      <Card className="relative z-10 w-full max-w-3xl shadow-xl border-0 bg-gradient-to-br from-background to-muted rounded-3xl">
        <CardContent className="flex flex-col items-center gap-6 p-10 text-center">
          <h2 className="text-4xl font-bold leading-tight">
            Let’s Build Something Great Together 🚀
          </h2>
          <p className="text-muted-foreground max-w-lg">
            I’m always open to exciting opportunities and collaborations.
            Whether you’re looking for a full-stack developer or just want to
            chat about tech, let’s get in touch!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="px-6 text-lg" asChild>
              <a href="/contact">Contact Me</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-6 text-lg"
              asChild
            >
              <a href="/resume.pdf" target="_blank">
                Download Resume
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.section>
  );
}
