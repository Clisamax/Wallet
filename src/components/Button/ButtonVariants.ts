// ButtonVariants.ts

export interface ButtonVariant {
    backgroundColor: string;
    color: string;
  }
  
  export const buttonVariants: Record<string, ButtonVariant> = {
    primary: {
      backgroundColor: '#007bff',
      color: '#fff',
    },
    secondary: {
      backgroundColor: '#6c757d',
      color: '#fff',
    },
    // Adicione outras variantes conforme necessário
  };
  