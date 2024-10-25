import { Sidebar } from "@/components/dashboard/Sidebar";
import getUserSession from "@/lib/supabase/getUserSession";
import type { LayoutParams } from "@/types/next";
import { redirect } from "next/navigation";

export default async function RouteLayout(props: LayoutParams<{}>) {
  const {
    data: { session },
  } = await getUserSession();

  if (!session) {
    return redirect("/login");
  }

  const user = session.user;
  console.log("user ::: ", user);
  return (
    <div className="h-full relative">
      <div className="flex flex-col fixed h-full w-72">
        <Sidebar user={user} />
      </div>
      <main className="md:pl-72">{props.children}</main>
    </div>
  );
}
