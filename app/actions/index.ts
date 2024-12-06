'use server';

import { signIn, signOut } from "@/app/auth";

export async function doSocialLogin(formData: FormData): Promise<void> {
    const action = formData.get('action');

    if (typeof action === "string") {
        await signIn(action, { redirectTo: "/profile" });

    } else {
        throw new Error("Invalid action parameter in formData");
    }
}

export async function doLogout(): Promise<void> {
    await signOut({redirectTo: "/"})

}
