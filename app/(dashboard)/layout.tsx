import { Sidebar } from "@/components/dashboard/Sidebar";
import type { LayoutParams } from "@/types/next";

export default async function RouteLayout(props: LayoutParams<{}>) {
  return (
    <div className="h-full relative">
      <div className="flex flex-col fixed h-full w-72">
        <Sidebar />
      </div>
      <main className="md:pl-72">{props.children}</main>
    </div>
  );
}
