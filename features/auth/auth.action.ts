"use server";

import createSupabaseServerClient from "@/lib/supabase/server";

export const singOutAction = async () => {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
};
