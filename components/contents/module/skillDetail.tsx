import { ThemeContext } from '@/asset/context';
import { ProgressBar } from '@/components/progress';
import { ReactNode, useContext } from 'react';

type SkillDetailProps = {
  skill: string;
  percentage: number;
  children: ReactNode;
};

export const SkillDetail = ({ skill, percentage, children }: SkillDetailProps) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="mx-[0.5rem] mb-[0.5rem]">
      <div className="flex items-center gap-1">
        <span className={`min-w-[2.5rem] font-semibold ${theme === 'dark' ? 'text-custom-Emerald' : 'text-info-800'}`}>
          {skill}
        </span>
        <ProgressBar id={`progress-bar-${skill}${percentage}`} percentage={percentage} />
      </div>
      <p className={`text-[0.9rem] max-w-[30rem] ${theme === 'dark' ? 'text-gray-cool-3' : 'text-gray-cool-6'}`}>
        {children}
      </p>
    </div>
  );
};
