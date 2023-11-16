type ProgressBarProps = {
  percentage: number;
};

export const ProgressBar = ({ percentage }: ProgressBarProps) => {
  return (
    <div className="flex gap-1 items-center m-1">
      <div className="progress-container bg-gray-cool-2 w-[13rem] h-[0.5rem] rounded-full">
        <div
          className={`progress-bar h-full w-[${percentage}%] bg-gradient-to-r from-info-200 bg-info-600 rounded-full`}
        ></div>
      </div>
      <span className="text-gray-cool-5 text-[0.8rem]">{percentage}%</span>
    </div>
  );
};
