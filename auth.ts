import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code", // Ensures the OAuth flow works as expected
                },
            },
        }),
    ],
    callbacks: {
        async redirect() {
            // Redirect to /profile after successful login
            return `https://mp-6-phi.vercel.app/profile`;
        },
    },
});
