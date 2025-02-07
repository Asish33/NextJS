import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = {
          name: "username",
          id: "1",
          email: "aishds",
        };
        if (user) {
          return user;
        }
        return null;
      }
    })
  ], secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
