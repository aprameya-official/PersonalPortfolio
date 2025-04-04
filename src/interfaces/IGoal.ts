export interface IGoal {
  id: number;
  title: string;
  thumbnail_url: string | null;
  description: string;
  collected: number;
  target_amount: number;
  target_date: string | null;
  slug: string;
  is_main: boolean;
  is_completed: boolean;
  is_hidden: boolean;
  date_created: string;
}
