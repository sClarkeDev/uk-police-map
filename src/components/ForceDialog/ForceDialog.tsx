import { Rss } from 'lucide-react';
import { CgFacebook, CgWebsite } from 'react-icons/cg';
import { FaTwitter } from 'react-icons/fa';
import { FaQuestion, FaYoutube } from 'react-icons/fa6';
import { ImFlickr2 } from 'react-icons/im';

import { ForceEngagementMethod } from '@/api/data-police-uk';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useCrimes } from '@/context/Crimes';

const SocialButton = ({ item }: { item: ForceEngagementMethod }) => {
  let icon = null;
  switch (item.type.toLowerCase()) {
    case 'web':
      icon = <CgWebsite className="h-5 w-5" />;
      break;
    case 'facebook':
      icon = <CgFacebook className="h-5 w-5" />;
      break;
    case 'x':
      icon = <FaTwitter className="h-5 w-5" />;
      break;
    case 'twitter':
      icon = <FaTwitter className="h-5 w-5" />;
      break;
    case 'youtube':
      icon = <FaYoutube className="h-5 w-5" />;
      break;
    case 'rss':
      icon = <Rss className="h-5 w-5" />;
      break;
    case 'flickr':
      icon = <ImFlickr2 className="h-5 w-5" />;
      break;
    default:
      icon = <FaQuestion className="h-5 w-5" />;
      break;
  }

  return (
    <Button variant="outline" size="icon" asChild>
      <a href={item.url} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    </Button>
  );
};

export const ForceDialog = () => {
  const { force } = useCrimes();

  if (!force) return null;

  return (
    <Dialog>
      <DialogTrigger className="mr-auto !py-0 hover:underline pointer-events-auto">
        <p className="text-lg font-semibold leading-none tracking-tight xl:text-3xl">{force.name}</p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{force.name}</DialogTitle>
        </DialogHeader>

        <div className="flex space-x-4">
          {force.engagement_methods?.map((social) => <SocialButton key={social.title} item={social} />)}
        </div>
      </DialogContent>
    </Dialog>
  );
};
