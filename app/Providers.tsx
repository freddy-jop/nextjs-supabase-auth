import { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

export type ProvidersProps = PropsWithChildren;

export const Providers = (props: ProvidersProps) => {
  return (
    <div>
      <Toaster position="bottom-center" />
      {props.children}
    </div>
  );
};
