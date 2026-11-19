/**
 * Keskkonnamuutujad ühes kohas, et puuduv seadistus annaks selge vea
 * ("...is not set") ja mitte hiljem arusaamatu `fetch failed`.
 */
function required(name: string, value: string | undefined): string {
  if (!value) {
    throw new Error(
      `Keskkonnamuutuja ${name} puudub. Kopeeri .env.example failiks .env.local ja täida see.`,
    );
  }
  return value;
}

export const SUPABASE_URL = () =>
  required("NEXT_PUBLIC_SUPABASE_URL", process.env.NEXT_PUBLIC_SUPABASE_URL);

export const SUPABASE_ANON_KEY = () =>
  required("NEXT_PUBLIC_SUPABASE_ANON_KEY", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
