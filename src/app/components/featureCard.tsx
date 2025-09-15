// import Image from "next/image";
import React, { ReactNode } from "react";

interface CardProps {
  icon: ReactNode;
  title: string;
  text: string;
  isNew?: boolean;
  tailwindStyle?: string;
  customStyle?: object;
}
const FeatureCard: React.FC<CardProps> = ({
  title,
  icon,
  text,
  isNew,
  tailwindStyle,
  customStyle,
}) => {
  return (
    <div className="flex justify-between items-center gap-3">
      <div className={tailwindStyle} style={customStyle}>
        {icon}
      </div>
      <div className="mr-auto">
        <h3 className="font-regular pt-0.5 pb-1 text-sm leading-5 text-foreground dark:text-foreground flex justify-start gap-2">
          {title}{" "}
          {isNew && (
            <span className="inline-block bg-[#116aff] text-sm font-semibold rounded-[8px] py-0.15 px-1.25 text-white">
              New
            </span>
          )}
        </h3>
        <p className="text-gray-600 text-[13.5px] leading-3.5">{text}</p>
      </div>
      <button
        type="button"
        className="bg-gray/25 px-4 py-1 rounded-xl border-0 text-[13px]"
      >
        Open
      </button>
    </div>
  );
};

export default FeatureCard;
