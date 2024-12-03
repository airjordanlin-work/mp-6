import NextAuth from "next-auth";
import GitHub from "@auth/core/providers/github";

export const { handlers, auth, signIn, signOut} = NextAuth({
    providers: [
        GitHub({
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
});

