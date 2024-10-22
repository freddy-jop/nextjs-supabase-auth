import { Toaster } from "@/components/ui/sonner";
import { PropsWithChildren } from "react";

export type ProvidersProps = PropsWithChildren;

export const Providers = (props: ProvidersProps) => {
  return (
    <div>
      <Toaster />
      {props.children}
    </div>
  );
};
