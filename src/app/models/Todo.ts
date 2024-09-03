export interface Todo {
  id: number;
  parent_id?: number | null;
  name?: string;
  description?: string;
  children?: Todo[];
}