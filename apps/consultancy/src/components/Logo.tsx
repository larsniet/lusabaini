import TransitionLink from "@lusabaini/ui/components/motion/TransitionLink";

const Logo = () => {
  return (
    <TransitionLink href="/" className="flex items-center gap-2.5 group z-50">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground transition-transform group-hover:scale-105">
        <span className="font-serif italic text-[17px] leading-none text-background -translate-y-px">
          ls
        </span>
      </div>
      <span className="flex flex-col leading-none">
        <span className="text-[19px] font-medium tracking-[-0.05em] text-foreground font-sans">
          luiza sabaini
        </span>
        <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.22em] text-foreground/50">
          consultoria holanda
        </span>
      </span>
    </TransitionLink>
  );
};

export default Logo;
