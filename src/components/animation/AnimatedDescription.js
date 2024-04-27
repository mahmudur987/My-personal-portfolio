import { useEffect, useState } from "react";

function AnimatedDescription() {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const description = `I am a full-stack developer, I possess a comprehensive understanding
  of front-end and back-end development. I am well-versed in HTML,
  CSS, and JavaScript, and have a deep knowledge of React, Redux,
  TypeScript, Next Js, Node js, Express Js and MongoDB. I can provide
  clean code and pixel-perfect design. I also make the website more &
  more interactive with web animations. Lets collaborate and build
  something extraordinary together`;

  const colorList = ["red", "blue", "green", "orange", "purple"]; // Add more colors as needed
  const delay = 200; // Delay between color changes

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colorList.length);
      setLetterIndex((prevIndex) => (prevIndex + 1) % description.length);
    }, delay);
    return () => clearInterval(intervalId);
  }, [colorList, description]);
  return (
    <div>
      {description.split("").map((char, index) => (
        <span
          key={index}
          style={{
            color:
              index === letterIndex ? colorList[currentColorIndex] : "white",
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}

export default AnimatedDescription;
