import { CaretRight } from "@phosphor-icons/react";
import { useState } from "react";

const FaqItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div
      className="inline-flex space-x-5 items-baseline cursor-pointer"
      onClick={() => setIsShow((prev) => !prev)}
    >
      <CaretRight
        size={15}
        className={
          isShow ? "rotate-90 duration-200 shrink-0" : "duration-200 shrink-0"
        }
      />
      <div className="space-y-5">
        <div className="text-base font-normal">{question}</div>
        {isShow && (
          <div className="text-white/70 duration-200 text-sm font-light">
            {answer}
          </div>
        )}
      </div>
    </div>
  );
};

export default FaqItem;
