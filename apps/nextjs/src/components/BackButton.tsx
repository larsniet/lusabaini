"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@lusabaini/ui/components/button";
import { useTransitionNavigation } from "@lusabaini/ui/components/motion/TransitionContext";

type Props = {
  className?: string;
  fallbackHref?: string;
};

export default function BackButton({ className, fallbackHref = "/my-work" }: Props) {
  const router = useRouter();
  const { navigate } = useTransitionNavigation();

  const handleBack = () => {
    if (navigate) {
      navigate(fallbackHref);
      return;
    }
    router.push(fallbackHref);
  };

  return (
    <Button
      onClick={handleBack}
      type="button"
      variant="outline"
      size="sm"
      className={className}
    >
      <ArrowLeft />
      Back
    </Button>
  );
}
