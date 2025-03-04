import { ClerkProvider } from '@clerk/clerk-react';
import { type ReactNode } from 'react';

// Make sure to add CLERK_PUBLISHABLE_KEY in your environment variables
const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY as string;

interface ClerkProviderProps {
  children: ReactNode;
}

export function ClerkProviderWithRoutes({ children }: ClerkProviderProps) {
  return (
    <ClerkProvider publishableKey={publishableKey}>
      {children}
    </ClerkProvider>
  );
}
