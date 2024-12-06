import { cookies } from 'next/headers';

// Set a cookie that expires in 1 hour
export async function setCookie(name: string, value: string) {
    const cookieStore = await cookies();  // Await the Promise to get the cookie store
    const expirationDate = new Date();
    expirationDate.setHours(expirationDate.getHours() + 24);

    cookieStore.set({
        name,
        value,
        expires: expirationDate,
        httpOnly: true, // Ensure the cookie is only accessible through HTTP requests
        path: '/', // Available across the whole app
    });
}
