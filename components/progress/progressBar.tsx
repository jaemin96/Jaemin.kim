type ProgressBarProps = {
  percentage: number;
};

export const ProgressBar = ({ percentage }: ProgressBarProps) => {
  return (
    <div className="flex gap-1 items-center m-1">
      <div className="progress-container bg-gray-cool-2 w-[13rem] h-[1rem] rounded-full">
        <div className={`progress-bar h-full w-[${percentage}%] bg-black-base rounded-full`}></div>
      </div>
      <span className="text-gray-cool-5">{percentage}%</span>
    </div>
  );
};
