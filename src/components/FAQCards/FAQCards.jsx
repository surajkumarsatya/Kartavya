import { useState } from "react";

const FAQ = ({ ques, ans, plusIcon, minusIcon }) => {
  const [showAns, setShowAns] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

  function handleFaq() {
    return showAns ? setShowAns(false) : setShowAns(true);
  }

  function handleIcon() {
    return showIcon ? setShowIcon(false) : setShowIcon(true);
  }
  //transition transform translate-y-1 ease-in-out duration-500

  return (
    <div className="pb-5">
      <div
        onClick={() => {
          handleFaq();
          handleIcon();
        }}
      >
        <div
          className={`flex flex-col items-start justify-between border border-zinc-300 
        p-6 lg:p-7 rounded-3xl gap-2 hover:cursor-pointer ${showAns ? 'bg-zinc-100' : ''}`}
        >
          <div className="flex items-center justify-between w-full relative">
            <span className="text-2xl lg:text-3xl pr-2 font-semibold">{ques} </span>
            <span className="flex text-2xl">
              {showIcon ? minusIcon : plusIcon}{" "}
            </span>
          </div>
          <div className={`text-zinc-600 lg:pr-10`}>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                showAns ? "max-h-20 opacity-100 pt-2" : "max-h-0 opacity-0"
              }`}
            >
            {ans}
              {/* <div className="">{ans}</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
