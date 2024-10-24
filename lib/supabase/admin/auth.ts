"use server";

import {
  CreateUserInput,
  LoginUserInput,
} from "@/lib/supabase/schema/user-schema";
import createSupabaseServerClient from "@/lib/supabase/server";

export async function signUpWithEmailAndPassword({
  data,
  emailRedirectTo,
}: {
  data: CreateUserInput;
  emailRedirectTo?: string;
}) {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      emailRedirectTo,
    },
  });

  console.log("signUp ::: ", result);

  return JSON.stringify(result);
}

export async function signInWithEmailAndPassword(data: LoginUserInput) {
  const supabase = await createSupabaseServerClient();
  const result = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });
  console.log("signInWithPassword ::: ", result);
  return JSON.stringify(result);
}
