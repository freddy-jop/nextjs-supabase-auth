import { OpimizerEditor } from "@/components/optimizerEditor/OptimizerEditor";
import type { PageParams } from "@/types/next";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <div>
      <OpimizerEditor />
    </div>
  );
}
