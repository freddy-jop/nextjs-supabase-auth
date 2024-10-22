import { DownloadButtonOptimizer } from "@/components/optimizer/DownloadButtonOptimizer";
import { OpimizerEditor } from "@/components/optimizerEditor/OptimizerEditor";
import type { PageParams } from "@/types/next";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <DownloadButtonOptimizer />
      </div>
      <OpimizerEditor />
    </div>
  );
}
