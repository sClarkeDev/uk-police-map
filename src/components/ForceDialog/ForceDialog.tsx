import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useCrimeStore } from '@/stores/crimes';
import { SocialButton } from '../SocialButton';

export const ForceDialog = () => {
  const force = useCrimeStore((state) => state.force);

  if (!force) return null;

  return (
    <Dialog>
      <DialogTrigger className="mr-auto !py-0 hover:underline pointer-events-auto">
        <p className="text-base font-semibold leading-none tracking-tight xl:text-3xl">{force.name}</p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{force.name}</DialogTitle>
        </DialogHeader>

        <div className="flex space-x-4">
          {force.engagement_methods?.map((social) => (
            <SocialButton key={social.title} id={social.type} url={social.url} />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
