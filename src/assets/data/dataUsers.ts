// assets/data/users.ts
interface User {
  id: number;
  name: string;
  email: string;
  company: string;
}

export const dataUsers: User[] = [
  { id: 1, name: 'Cristóbal', email: 'cristobal@example.com', company: 'Empresa A' },
  { id: 2, name: 'María', email: 'maria@example.com', company: 'Empresa B' },
];

