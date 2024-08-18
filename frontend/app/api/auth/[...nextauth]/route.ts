import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import axios from "axios";

// Define interfaces for your custom session and token objects
interface CustomUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

interface CustomToken extends JWT {
  accessToken: string;
  user: CustomUser;
}

declare module "next-auth" {
  interface Session {
    accessToken: string;
    user: CustomUser;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken: string;
    user: CustomUser;
  }
}

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<CustomToken | null> {
        try {
          const response = await fetch("https://thephysicsbugle.onrender.com/api/jwt/create/", {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          });

          const data = await response.json();
          console.log(data);
          const user = await getUserInfo(data.access);
          console.log(user);

          if (response.ok) {
            return {
              accessToken: data.access,
              user: {
                email: user?.email,
                firstName: user?.first_name,
                lastName: user?.last_name,
              } as CustomUser,
            };
          } else {
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
    async jwt({ token, user }: { token: CustomToken; user?: any }) {
      console.log(token, user);
      if (user) {
        token.accessToken = user.accessToken;
        token.user = user.user;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: CustomToken }) {
      session.accessToken = token.accessToken;
      session.user = token.user;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export default NextAuth(authOptions);

const handler = NextAuth(authOptions); 
export { handler as GET, handler as POST }

async function getUserInfo(accessToken: string) {
  try {
    const response = await axios.get("https://thephysicsbugle.onrender.com/api/users/me", {
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
