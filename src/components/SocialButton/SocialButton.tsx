import { Rss } from 'lucide-react';
import { CgFacebook, CgWebsite } from 'react-icons/cg';
import { FaQuestion, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ImFlickr2 } from 'react-icons/im';
import { Button } from '../ui/button';

interface SocialButtonProps {
  id: string;
  url: string;
}

export const SocialButton = ({ id, url }: SocialButtonProps) => {
  let icon = null;
  switch (id.toLowerCase()) {
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
      <a href={url} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    </Button>
  );
};
