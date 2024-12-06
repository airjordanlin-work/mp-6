import { Button } from "@mui/material";
import { doSocialLogin } from "@/app/actions";

const LoginForm: React.FC = () => {
    return (
        <form action={doSocialLogin} method="post">
            <Button
                variant="contained"
                color="primary"
                type="submit"
                name="action"
                value="github"
                sx={{
                    padding: "8px 16px",
                    fontSize: "1.1rem",
                    margin: "8px",
                    borderRadius: "8px",
                    textTransform: "none", // To keep the text case as is
                    backgroundColor: "#000", // Override the default color if needed
                    '&:hover': {
                        backgroundColor: "#333", // Darken on hover
                    }
                }}
            >
                Sign in with GitHub
            </Button>
        </form>
    );
};

export default LoginForm;
