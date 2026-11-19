import { cookies } from "next/headers";

import { createServerClient } from "@supabase/ssr";

import { SUPABASE_ANON_KEY, SUPABASE_URL } from "./env";

/**
 * Supabase klient serveris (server-komponendid, server actionid, route handlerid).
 * Sessioon loetakse küpsistest, seega RLS näeb õiget kasutajat.
 */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(SUPABASE_URL(), SUPABASE_ANON_KEY(), {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          for (const { name, value, options } of cookiesToSet) {
            cookieStore.set(name, value, options);
          }
        } catch {
          // Server-komponendist küpsiseid kirjutada ei saa. Sessiooni värskendab
          // middleware (vt #4), seega siin on vaikimine ohutu.
        }
      },
    },
  });
}
