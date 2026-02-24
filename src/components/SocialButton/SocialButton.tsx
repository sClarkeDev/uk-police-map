import { Facebook, FileQuestion, Globe, Rss, Twitter, X, Youtube } from "lucide-react"

import { Button } from "../ui/button"

interface SocialButtonProps {
  id: string
  url: string
}

export const SocialButton = ({ id, url }: SocialButtonProps) => {
  let icon = null
  switch (id.toLowerCase()) {
    case "web":
      icon = <Globe className="h-5 w-5" />
      break
    case "facebook":
      icon = <Facebook className="h-5 w-5" />
      break
    case "x":
      icon = <Twitter className="h-5 w-5" />
      break
    case "twitter":
      icon = <X className="h-5 w-5" />
      break
    case "youtube":
      icon = <Youtube className="h-5 w-5" />
      break
    case "rss":
      icon = <Rss className="h-5 w-5" />
      break

    default:
      icon = <FileQuestion className="h-5 w-5" />
      break
  }

  return (
    <Button variant="outline" size="icon" asChild>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    </Button>
  )
}
