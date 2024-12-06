import { auth } from "@/app/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import type { Session } from "@auth/core/types";
import Logout from "../components/Logout";

const HomePage: React.FC = async () => {
    const session: Session | null = await auth(); // Use the correct type from the library

    if (!session?.user) redirect("/");

    const userName = session.user.name ?? "Guest"; // Handle potential null or undefined
    const userImage = session.user.image ?? "/default-avatar.png"; // Provide fallback for image
    const userEmail = session.user.email ?? "No email provided";
    return (
        <div className="flex flex-col items-center m-4">
            <h1>Profile</h1>
                <Image
                    src={userImage}
                    alt={userName}
                    width={72}
                    height={72}
                    className="rounded-full"
                />
            <p>USERNAME: {userName}</p>
            <p>EMAIL: {userEmail}</p>
            <p>Signed in with: github</p>
            <Logout/>
        </div>

    );

};

export default HomePage;
