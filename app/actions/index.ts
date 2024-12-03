'use server';

import { signIn, signOut } from "@/auth";

export async function doSocialLogin(formData: FormData): Promise<void> {
    const action = formData.get('action');

    // Ensure 'action' is a string before passing it to signIn
    if (typeof action === "string") {
        await signIn(action, { redirectTo: "/profile" });
    } else {
        throw new Error("Invalid action parameter in formData");
    }
}

export async function doLogout(): Promise<void> {
    await signOut({redirectTo: "/"})
    // Placeholder function for logout logic
    // Implement your logout logic here
}
