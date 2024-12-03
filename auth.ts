import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
export const { handlers, auth, signIn, signOut} = NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,

            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",

                }
            }
        }),
    ],
    callbacks: {
        async redirect() {
            // Redirect to /profile after successful login
            return `https://mp-6-phi.vercel.app/profile`;
        },
    },
});
