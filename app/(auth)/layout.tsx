
import { ClerkProvider } from '@clerk/nextjs'
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return ( 
        <ClerkProvider>
      <div className="h-full flex items-center justify-center">
        {children}
      </div>
      </ClerkProvider>
     );
  }
   
  export default AuthLayout;







 