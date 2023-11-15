type ProgressBarProps = {
  percentage: number;
};

export const ProgressBar = ({ percentage }: ProgressBarProps) => {
  return (
    <div className="progress-container">
      <div className={`progress-bar `}></div>
      <span>{percentage}%</span>
    </div>
  );
};
