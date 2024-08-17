import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

// Define interfaces for API responses
interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}
interface UserResponse {
  // Define user properties here
  id: number;
  email: string;
  name: string;
}

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: Record<"username" | "password", string> | undefined, req: any): Promise<any> {
        try {
          const response = await fetch("https://thephysicsbugle.onrender.com/api/jwt/create/", {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          });

          const data: AuthResponse = await response.json();

          if (response.ok) {
            return data;
          } else {
            // Handle authentication errors
            throw new Error("Authentication failed");
          }
        } catch (error) {
          console.error(error);
          throw new Error("Authentication failed");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token }: {token: any}) {
      return token;
    },
    async session({ session, token }: {session: any, token: any}) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
const handler = NextAuth(authOptions); 
export { handler as GET, handler as POST }

async function getUserInfo(accessToken: string): Promise<UserResponse> {
  try {
    const response = await axios.get("http://your-django-backend.com/api/users/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw error for handling in calling component
  }
}
