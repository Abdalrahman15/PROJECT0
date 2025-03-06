import React, { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons"; // ✅ الاستيراد الصحيح للأيقونات

const TEXTS = [
  <>
    Health care ❣
  </>,
  <>
    Personal training{" "}
    <span style={{ display: "inline-block", transform: "scaleX(-1)" }}>💪</span>
  </>,
  <>
    Motivation ⚡
  </>,
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % TEXTS.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="h-screen bg-black home-header relative -z-40">
        <div className="absolute bg-gray-950 bg-opacity-55 top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center">
          <h1 className="text-white text-5xl">Project Test</h1>
          <div className="flex flex-col lg:flex-row mt-5 text-4xl ">
          <h1 className="text-white ">
            <TextTransition springConfig={presets.wobbly}>{TEXTS[index]}</TextTransition> 
          </h1>
          <span className="text-white ms-5">
            and more ...
          </span>
          </div>
        </div>
      </div>

      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
      <div>home</div>
    </>
  );
}
