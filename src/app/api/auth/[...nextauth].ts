import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

if (
  !process.env.SPOTIFY_CLIENT_ID ||
  !process.env.SPOTIFY_CLIENT_SECRET ||
  !process.env.NEXTAUTH_SECRET
) {
  throw new Error("Auth required env variables are not set");
}

export const authOptions: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID as string,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
