const StartSteps = ({ number, text }) => (
  <div className="flex-row flexCenter">
    <div className="flexCenter w-[50px] h-[50px] rounded-xl bg-[#323F5D]">
      <p className="font-bold text-[20px] text-white">{number}</p>
    </div>
    <p className="flex-1 ml-[30px] text-[25px] font-semibold text-[#B0B0B0] leading-[32.4px]">
      {text}
    </p>
  </div>
);

export default StartSteps;
