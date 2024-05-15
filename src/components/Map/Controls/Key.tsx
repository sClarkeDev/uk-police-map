import { BLUE, RED, YELLOW } from '@/constants/colors';

const KeyItem = ({ text, color }: { text: string; color: string }) => {
  return (
    <div className="flex items-center space-x-4">
      <div
        className="w-3 h-3 rounded-full flex items-center justify-center"
        style={{ boxShadow: `0 0 8px 0 ${color}`, backgroundColor: `${color}` }}
      />
      <p className="text-base font-light">{text}</p>
    </div>
  );
};

export const Key = () => {
  return (
    <div className="mt-auto flex flex-col space-y-4 px-5 py-4 bg-background/80 backdrop-blur rounded-lg">
      <KeyItem text="Low Severity" color={BLUE} />
      <KeyItem text="Medium Severity" color={YELLOW} />
      <KeyItem text="High Severity" color={RED} />
      <p className="text-xs text-muted-foreground text-center">(Crime severities generated using ai)</p>
    </div>
  );
};
