import NextAuth from "next-auth";
import IdentityServer4Provider from "next-auth/providers/identity-server4";

export default NextAuth({
  providers: [
    IdentityServer4Provider({
      id: "identity-server4",
      name: "IdentityServer4",
      issuer: process.env.NEXT_PUBLIC_IDENTITY_SERVER_AUTHORITY,
      clientId: process.env.NEXT_PUBLIC_IDENTITY_SERVER_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_IDENTITY_SERVER_CLIENT_SECRET,
      scope: 'openid profile email',
      authorizationUrl: `${process.env.NEXT_PUBLIC_IDENTITY_SERVER_AUTHORITY}/connect/authorize?response_type=code&scope=openid%20profile%20email`,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt(token, user, account, profile, isNewUser) {
      if (token.token.account) {
        const decodedToken = token.token.account.access_token ? JSON.parse(Buffer.from(token.token.account.access_token.split('.')[1], 'base64').toString()) : {};
        token.token.profile = decodedToken;
      }

      if (user) {
        token.user = user;
      }

      return token;
    },
    async session({ session, token }) {
      if (token?.token?.profile) {
        const { email, name, fullname } = token.token.profile;
        session.user.email = email;
        session.user.name = name;
        session.user.name = fullname;
      }

      if (token?.token?.account) {
        session.access_token = token.token.account.access_token;
      }

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
});
