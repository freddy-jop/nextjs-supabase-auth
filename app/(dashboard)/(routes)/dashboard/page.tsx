import { ListTools } from "@/components/dashboard/ListTools";
import { PageParams } from "@/types/next";

export default async function RoutePage(props: PageParams<{}>) {
  return (
    <>
      <ListTools />
    </>
  );
}
