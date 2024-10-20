import type { LayoutParams } from "@/types/next";

export default async function RouteLayout(props: LayoutParams<{}>) {
  return (
    <main className="h-full bg-gray-900 overflow-auto">
      <div className="mx-auto max-w-screeb-xl h-full w-full">
        {props.children}
      </div>
    </main>
  );
}
