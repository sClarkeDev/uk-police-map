import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useCrimeStore } from '@/stores/crimes';
import { SocialButton } from '../SocialButton';

export const NeighbourhoodDialog = () => {
  const neighbourhood = useCrimeStore((state) => state.neighbourhood);

  if (!neighbourhood) return null;

  return (
    <Dialog>
      <DialogTrigger className="mr-auto !py-0 hover:underline pointer-events-auto">
        <p className="text-sm text-muted-foreground text-left xl:text-xl">
          {neighbourhood.name.replace(/&amp;/g, '&')}
        </p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{neighbourhood.name}</DialogTitle>
        </DialogHeader>

        <div className="flex space-x-4">
          {neighbourhood.url_force && <SocialButton id="web" url={neighbourhood.url_force} />}
          {Object.keys(neighbourhood.contact_details)
            ?.filter((key) => key !== 'email' && key !== 'website' && key !== 'telephone')
            .map((key) => <SocialButton key={key} id={key} url={neighbourhood.contact_details[key]} />)}
        </div>
      </DialogContent>
    </Dialog>
  );
};
