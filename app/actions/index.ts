'use server';

import { signIn } from "@/auth";

export async function doSocialLogin(formData: FormData): Promise<void> {
    const action = formData.get('action');

    // Ensure 'action' is a string before passing it to signIn
    if (typeof action === "string") {
        await signIn(action, { redirectTo: "/home" });
    } else {
        throw new Error("Invalid action parameter in formData");
    }
}

export async function doLogout(): Promise<void> {
    // Placeholder function for logout logic
    // Implement your logout logic here
}
