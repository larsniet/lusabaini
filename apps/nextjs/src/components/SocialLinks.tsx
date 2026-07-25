"use client";

import { Mail } from "lucide-react";
import { SiInstagram, SiTiktok, SiYoutube, SiFacebook, SiX } from "react-icons/si";
import { SiLinkedin } from "@/components/icons/SiLinkedin";
import type { SocialLink } from "@/lib/queries";
import { Button } from "@lusabaini/ui/components/button";
import { buildMailtoUrl } from "@lusabaini/ui/lib/utils";

type Props = {
  socials?: SocialLink[];
  className?: string;
  iconClassName?: string;
  buttonClassName?: string;
};

function SocialIcon({ icon }: { icon: SocialLink["icon"] }) {
  if (icon === "instagram") return <SiInstagram className="size-5" />;
  if (icon === "linkedin") return <SiLinkedin className="size-5" />;
  if (icon === "email") return <Mail className="size-5" />;
  if (icon === "tiktok") return <SiTiktok className="size-5" />;
  if (icon === "youtube") return <SiYoutube className="size-5" />;
  if (icon === "facebook") return <SiFacebook className="size-5" />;
  if (icon === "x") return <SiX className="size-5" />;
  // Fallback (should not happen with proper types)
  return <Mail className="size-5" />;
}

export default function SocialLinks({
  socials,
  className = "",
  buttonClassName = "border-foreground/10 bg-white/40 backdrop-blur-md hover:bg-white/70",
}: Props) {
  const socialData = (socials ?? [])
    .filter((s) => (s?.href ?? "").trim() && (s.href ?? "").trim() !== "#")
    .slice(0, 6);

  if (!socialData.length) return null;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialData.map((s, idx) => {
        // Enhance mailto links with subject and body if provided
        const href =
          s.icon === "email"
            ? buildMailtoUrl(s.href, s.emailSubject, s.emailBody)
            : s.href;

        return (
          <Button
            key={`${s.icon}-${idx}`}
            asChild
            variant="outline"
            size="icon-lg"
            className={buttonClassName}
          >
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label || s.icon}
            >
              <SocialIcon icon={s.icon} />
            </a>
          </Button>
        );
      })}
    </div>
  );
}

export { SocialIcon };
