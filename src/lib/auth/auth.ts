import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, account, user }) {
      // 必要に応じてトークンに情報を追加
      return token;
    },
    async session({ session, token }) {
      // セッションにカスタム情報を追加可能
      return session;
    },
  },
});