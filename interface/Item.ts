export default interface Item {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  tag: string;
  createdAt: Date;
  dueDate: Date;
}