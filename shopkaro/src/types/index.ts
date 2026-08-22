// Global type definitions
// Export all your types/interfaces here

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Transaction {
  id: string;
  amount: number;
  description: string;
  date: string;
  category: string;
}
