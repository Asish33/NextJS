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
      async authorize(credentials,req){
        const username = credentials?.username;
        const password = credentials?.password;
        const user = {
            name:"asish",
            age:19
        }
        if(user){
            return user;
        }
        return null;
      }
    }),
  ],
});

export { handler as GET, handler as POST };
