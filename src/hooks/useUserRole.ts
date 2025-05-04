// src/hooks/useUserRole.ts
export const useUserRole = (): 'admin' | 'empresa' | 'user' | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('userRole') as any;
};