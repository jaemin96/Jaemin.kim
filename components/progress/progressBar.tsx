import { ThemeContext } from '@/asset/context';
import { useContext, useEffect } from 'react';
type ProgressBarProps = {
  percentage: number;
  id: string;
};

export const ProgressBar = ({ id, percentage }: ProgressBarProps) => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.getElementById(id).style.width = `${percentage}%`;
  }, [id, percentage]);

  return (
    <div className="flex gap-1 items-center m-1">
      <div className="progress-container bg-gray-cool-2 w-[13rem] h-[0.5rem] rounded-full mb-[0.1rem]">
        <div
          id={id}
          className={`progress-bar h-full bg-gradient-to-r from-info-200 bg-info-600 rounded-full ${
            theme === 'dark' ? 'from-custom-Emerald bg-success-500' : ''
          }`}
        ></div>
      </div>
      <span className={`text-gray-cool-5 text-[0.8rem] ${theme === 'dark' ? 'text-gray-cool-4' : ''}`}>
        {percentage}%
      </span>
    </div>
  );
};
