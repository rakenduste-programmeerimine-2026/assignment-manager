/** Üks koolitöö andmebaasi tabelist `assignments`. */
export type Assignment = {
  id: string;
  user_id: string;
  title: string;
  subject: string;
  /** ISO kuupäev `YYYY-MM-DD` (Postgres `date`). */
  due_date: string;
  is_done: boolean;
  /** ISO ajatempel. */
  created_at: string;
};

/** Väljad, mille kasutaja ise sisestab. `user_id` tuleb alati sessioonist. */
export type NewAssignment = Pick<Assignment, "title" | "subject" | "due_date">;
