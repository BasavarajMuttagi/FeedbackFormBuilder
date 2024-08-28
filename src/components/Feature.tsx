import { ArrowRight } from "@phosphor-icons/react";
import credits from "../assets/creditPerMonth.svg";
import rollover from "../assets/rolloverOfUnusedCredits.svg";
import MMRPerks from "../assets/MMRPerks.svg";
import flexible from "../assets/100Flexible.svg";
import discountOnFoodAndBeverages from "../assets/discountOnFoodAndBeverages.svg";
import convenienceFee from "../assets/convenienceFee.svg";

import star1 from "../assets/teenyicons_star-solid-1.svg";
import star2 from "../assets/teenyicons_star-solid-2.svg";
import star3 from "../assets/teenyicons_star-solid.svg";

const Feature = () => {
  return (
    <div className="h-screen  bg-neutral-900/70 text-white">
      <div className="flex items-center justify-center space-x-10 h-full">
        <section className="flex flex-col justify-between max-w-96 space-y-4">
          <div className="flex items-end p-2">
            <img src={star1} alt="star1" className="w-6 h-6" />
            <img src={star2} alt="star2" className="w-7 h-7 mx-1 mb-2.5" />
            <img src={star3} alt="star3" className="w-6 h-6" />
          </div>
          <div className="space-y-3">
            <h2 className="text-xl font-medium tracking-wide">
              Reel Deal Monthly Movies
            </h2>
            <p className="text-sm text-white/60 font-normal">
              Your flexible monthly membership to the latest movies
            </p>
          </div>
          <div className="w-full border-b border-white/10"></div>
          <div className="space-y-10">
            <div className="space-y-4">
              <h3 className="text-base font-normal">
                What is MVP Subscription?
              </h3>
              <ol className="text-white/70 space-y-8 relative text-sm font-light">
                <li className="inline-flex items-end space-x-5 before:w-[1px] before:h-9 before:bg-copper-gold before:absolute before:left-4 before:top-10">
                  <span className="rounded-full border w-8 h-8 shrink-0 text-lg flex items-center justify-center text-copper-gold border-copper-gold">
                    1
                  </span>
                  <span>
                    MVP Subscription provides the member 1 movie credit per
                    month
                  </span>
                </li>
                <li className="inline-flex items-center space-x-5 before:w-[1px] before:h-9 before:bg-copper-gold before:absolute before:left-4 before:top-[6.77rem]">
                  <span className="rounded-full border w-8 h-8 shrink-0 text-lg flex items-center justify-center text-copper-gold border-copper-gold">
                    2
                  </span>
                  <span>
                    They can avail it at any Marcus theatre or Movie Tavern
                  </span>
                </li>
                <li className="inline-flex items-start space-x-5">
                  <span className="rounded-full border w-8 h-8 shrink-0 text-lg flex items-center justify-center text-copper-gold border-copper-gold">
                    3
                  </span>
                  <span>
                    Members earn 100 points and get a $5 reward redeemable on
                    food & beverages + many more benefits
                  </span>
                </li>
              </ol>
            </div>
            <div className="flex items-center space-x-10">
              <button className="px-8 py-2 rounded-lg bg-red-600 inline-flex space-x-2 items-center font-medium">
                <span>Get started</span>
                <ArrowRight size={14} weight="bold" />
              </button>
              <a
                href="#"
                className="underline underline-offset-2 text-white/90 text-sm font-light"
              >
                Learn more
              </a>
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-between space-y-4">
          <div className="grid grid-cols-8 grid-rows-2 max-w-xl gap-4">
            <div className="bg-black rounded-3xl space-y-3 p-5 col-span-3">
              <img src={credits} alt="credits" className="h-10" />
              <div className="space-y-1">
                <h3 className="font-medium text-copper-gold">
                  1 credit per month
                </h3>
                <p className="text-sm text-white/40 font-light">
                  One 2D standard movie per month*
                </p>
              </div>
            </div>
            <div className="bg-black rounded-3xl space-y-3 p-5 col-span-3">
              <img src={rollover} alt="rollover" className="h-10" />
              <div className="space-y-1">
                <h3 className="font-medium text-copper-gold">
                  Free rollover of unused credits
                </h3>
                <p className="text-sm text-white/40 font-light">
                  Unused credits will be combined the following month
                </p>
              </div>
            </div>
            <div className="bg-black rounded-3xl space-y-3 p-5 col-span-2">
              <img src={MMRPerks} alt="MMRPerks" className="h-10" />
              <div className="space-y-1">
                <h3 className="font-medium text-copper-gold">
                  All MMR perks included
                </h3>
                <p className="text-sm text-white/40 font-light">+ benefits</p>
              </div>
            </div>
            <div className="bg-black rounded-3xl space-y-3 p-5 col-span-2">
              <img src={flexible} alt="flexible" className="h-8" />
              <div className="space-y-1">
                <h3 className="font-medium text-copper-gold">100% Flexible</h3>
                <p className="text-sm text-white/40 font-light">
                  Cancel anytime
                </p>
              </div>
            </div>
            <div className="bg-black rounded-3xl space-y-3 p-5 col-span-3">
              <img
                src={discountOnFoodAndBeverages}
                alt="discountOnFoodAndBeverages"
                className="h-9"
              />
              <div className="space-y-1">
                <h3 className="font-medium text-copper-gold">
                  20% Discount on all Food and Beverages
                </h3>
                <p className="text-sm text-white/40 font-light">
                  Excluding alcohol
                </p>
              </div>
            </div>
            <div className="bg-black rounded-3xl space-y-3 p-5 col-span-3">
              <img src={convenienceFee} alt="convenienceFee" className="h-9" />
              <div className="space-y-1">
                <h3 className="font-medium text-copper-gold">
                  0 Convenience Fees
                </h3>
                <p className="text-sm text-white/40 font-light">
                  Waived on all days on any tickets purchase
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-2 text-white/40 text-[10px] font-light">
            <p>
              ¹Excludes IMAX and DBOX formats. No fees apply to Passport Credits
              only. Other fees apply to full-priced tickets.
            </p>
            <p>²Excludes alcoholic beverages</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Feature;
