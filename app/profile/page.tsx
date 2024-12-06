
import { auth } from "@/app/auth";
import { redirect } from "next/navigation";
import type { Session } from "@auth/core/types";
import Logout from "../components/Logout";
import { Box, Typography, Avatar} from "@mui/material";

const HomePage: React.FC = async () => {
    const session: Session | null = await auth();

    if (!session?.user) redirect("/");

    const userName = session.user.name ?? "Guest";
    const userImage = session.user.image ?? "/default-avatar.png";
    const userEmail = session.user.email ?? "No email provided";

    return (
        <Box
            sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(135deg, #3a7bd5, #00d2ff)",
                textAlign: "center",
                padding: "2%",
            }}
        >
            <Box
                sx={{
                    width: "90%",
                    maxWidth: "500px",
                    padding: "2rem",
                    background: "rgba(255, 255, 255, 0.9)",
                    borderRadius: "16px",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                    textAlign: "center",
                }}
            >
                {/* Profile Header */}
                <Typography
                    variant="h4"
                    sx={{
                        fontSize: "calc(1rem + 2vw)",
                        fontWeight: "bold",
                        marginBottom: "1rem",
                        color: "#333",
                    }}
                >
                    Profile
                </Typography>

                {/* Profile Picture */}
                <Avatar
                    src={userImage}
                    alt={userName}
                    sx={{
                        width: 96,
                        height: 96,
                        margin: "0 auto",
                        marginBottom: "1rem",
                        border: "4px solid #3a7bd5",
                    }}
                />

                {/* User Information */}
                <Typography
                    sx={{
                        fontSize: "calc(1rem + 0.5vw)",
                        marginBottom: "0.5rem",
                        fontWeight: "bold",
                    }}
                >
                    USERNAME: {userName}
                </Typography>
                <Typography
                    sx={{
                        fontSize: "calc(0.9rem + 0.5vw)",
                        marginBottom: "0.5rem",
                        color: "#555",
                    }}
                >
                    EMAIL: {userEmail}
                </Typography>
                <Typography
                    sx={{
                        fontSize: "calc(0.8rem + 0.5vw)",
                        marginBottom: "1rem",
                        color: "#777",
                    }}
                >
                    Signed in with: GitHub
                </Typography>

                {/* Logout Button */}
                <Logout />
            </Box>
        </Box>
    );
};

export default HomePage;
