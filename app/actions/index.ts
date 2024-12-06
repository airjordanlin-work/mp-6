'use server';

import { signIn, signOut } from "@/app/auth";
import { redirect } from "next/navigation";
import { setCookie } from '@/app/cookies';
import { Session } from "@auth/core/types"; // Import the Session type

export async function doSocialLogin(formData: FormData): Promise<void> {
    const action = formData.get('action');

    if (typeof action === "string") {
        // Call signIn function to authenticate user and assume it returns a Session object
        const session = await signIn(action, { redirectTo: "/profile" }) as Session | null;

        if (session?.user) {
            // After successful login, save the user ID or other user data in cookies
            await setCookie('userId', session.user.id as string); // Save userId for 1 hour
            await setCookie('userName', session.user.name ?? 'Guest'); // Use fallback if name is undefined
        }

        // Redirect after login
        redirect('/profile');
    } else {
        throw new Error("Invalid action parameter in formData");
    }
}

export async function doLogout(): Promise<void> {
    await signOut({ redirectTo: "/" });
}
