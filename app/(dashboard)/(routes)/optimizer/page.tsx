import { ManageDropZone } from "@/components/optimizer/ManageDropZone";
import type { PageParams } from "@/types/next";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <div className="flex flex-col items-center justify-center">
      <ManageDropZone />
    </div>
  );
}
