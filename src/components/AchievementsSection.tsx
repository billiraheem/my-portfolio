import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { useInView } from "framer-motion";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  { metric: "Projects", value: "10", postfix: "+" },
  { metric: "Years", value: "3", postfix: "+" },
];

export const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border border-[#33353F] rounded-md py-8 px-16 flex flex-row items-center justify-between">
        {achievementsList.map((a, i) => {
          return (
            <div
              key={i}
              className="flex flex-col items-center justify-center mx-4"
            >
              <h2
                ref={ref}
                className="text-white text-4xl font-bold flex flex-row"
              >
                {isInView ? (
                  <AnimatedNumbers
                    useThousandsSeparator
                    animateToNumber={parseInt(a.value)}
                    locale="en-US"
                    className="text-white text-4xl font-bold"
                    transitions={(index) => {
                      return {
                        mass: 1,
                        friction: 10,
                        tensions: 140 * (index + 1),
                        type: "spring",
                        duration: index + 0.3,
                      };
                    }}
                  />
                ) : (
                  a.value + a.postfix
                )}

                {a.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{a.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
