import { Fragment } from "react/jsx-runtime";
import FaqItem from "./FaqItem";
const data = [
  {
    question: "What movies are included in the monthly credit?",
    answer:
      "The monthly credit can be used for one 2D standard movie. Please note that IMAX and DBOX formats are excluded from this offer.",
  },
  {
    question: "How does the credit rollover work?",
    answer:
      "Any unused credits from your current month will automatically roll over and be combined with your credits for the following month, giving you more flexibility in how you use your membership.",
  },
  {
    question: "What are the MMR perks mentioned?",
    answer:
      "MMR (Marcus Movie Rewards) perks include various benefits such as discounts on concessions, priority lines, and special member-only events. All these perks are included with your Reel Deal Monthly Movies membership.",
  },
  {
    question: "Can I cancel my membership at any time?",
    answer:
      "Yes, our membership is 100% flexible. You can cancel your subscription at any time without any long-term commitment or cancellation fees.",
  },
  {
    question: "Does the 20% discount apply to all food and beverages?",
    answer:
      "The 20% discount applies to all food and non-alcoholic beverages. Please note that alcoholic beverages are excluded from this discount.",
  },
  {
    question: "Are there any additional fees when purchasing tickets?",
    answer:
      "No, there are zero convenience fees for members. These fees are waived on all days for any ticket purchases made with your membership.",
  },
];
const Faq = () => {
  return (
    <section className="space-y-10 px-[5%] h-screen flex flex-col justify-center">
      <h2 className="text-white/90 text-xl font-medium self-start">
        Frequently Asked Questions
      </h2>
      <div className="space-y-5 text-white/80">
        {data.map((eachFaq, index) => (
          <Fragment key={index}>
            <FaqItem {...eachFaq} />
            <div className="w-full border-b border-white/10"></div>
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default Faq;
