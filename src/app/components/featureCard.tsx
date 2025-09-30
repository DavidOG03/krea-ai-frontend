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
    <div className="flex justify-between items-center gap-3 hover:bg-gray/10 transition-all duration-200 py-3 px-1 ease-in-out cursor-pointer">
      <div className={tailwindStyle} style={customStyle}>
        {icon}
      </div>
      <div className="mr-auto">
        <h3 className="font-semibold pt-0.5 pb-1 text-xs leading-4 -mt-2 text-foreground dark:text-foreground flex justify-start gap-2">
          {title}{" "}
          {isNew && (
            <span className="inline-block bg-[#116aff] text-[10px] font-semibold rounded-[8px] py-0.15 px-1.25 text-white">
              New
            </span>
          )}
        </h3>
        <p className="text-gray text-[12px] leading-3.5">{text}</p>
      </div>
      <button
        type="button"
        className="bg-gray/25 px-4 py-1 rounded-xl border-0 text-xs text-foreground  dark:text-foreground cursor-pointer hover:bg-gray/30 transition-all duration-200"
      >
        Open
      </button>
    </div>
  );
};

export default FeatureCard;
