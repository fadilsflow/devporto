"use client";

import {
  Copy,
  Share2,
  X,
  Facebook,
  Linkedin,
  Mail,
  MessageSquare,
  Instagram,
} from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { NAME } from "@/app/data";
import { LucideIcon } from "lucide-react";

interface SocialLink {
  name: string;
  icon: LucideIcon;
  url: string;
}

// Define the social links creator function - can be imported from a utils file
const createSocialLinks = (url: string, name: string): SocialLink[] => [
  {
    name: "X (Twitter)",
    icon: X,
    url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url
    )}&text=${name} - ${url}`,
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`,
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      url
    )}`,
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: `https://www.instagram.com/create/story?url=${encodeURIComponent(
      url
    )}`,
  },
  {
    name: "WhatsApp",
    icon: MessageSquare,
    url: `https://wa.me/?text=${encodeURIComponent(
      `${name} - ${url}: ${url}`
    )}`,
  },
  {
    name: "Email",
    icon: Mail,
    url: `mailto:?subject=${name} - ${url}&body=${encodeURIComponent(
      `${name} - ${url}: ${url}`
    )}`,
  },
];

export function ShareButton() {
  const [isCopied, setIsCopied] = useState(false);
  const pathname = usePathname();
  const [currentUrl, setCurrentUrl] = useState("");
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = window.location.origin + pathname;
      setCurrentUrl(url);
      setSocialLinks(createSocialLinks(url, NAME));
    }
  }, [pathname]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setIsCopied(true);
      toast.success("Link copied to clipboard!");
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error(err);
      toast.error("Failed to copy link");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Share2 className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share links</DialogTitle>
          <DialogDescription>
            Share your links with others through various platforms.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex items-center space-x-2 rounded-lg border p-3">
            <div className="grid flex-1 gap-2">
              <p className="text-sm text-muted-foreground truncate">
                {currentUrl}
              </p>
            </div>
            <Button
              type="button"
              size="sm"
              className="px-3"
              onClick={handleCopy}
              disabled={isCopied}
            >
              <span className="sr-only">Copy</span>
              <Copy className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {socialLinks.map((social) => (
              <Button
                key={social.name}
                variant="outline"
                className="w-full justify-start gap-2 transition-colors"
                asChild
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <social.icon className="h-4 w-4" />
                  <span>{social.name}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
