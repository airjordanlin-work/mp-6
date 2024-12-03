import { doSocialLogin } from "@/app/actions";
import { Button, Box } from "@mui/material";

const LoginForm: React.FC = () => {
    return (
        <Box
            component="form"
            action={doSocialLogin}
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mt: 4 }}
        >
            <Button
                variant="contained"
                color="primary"
                type="submit"
                name="action"
                value="github"
                sx={{
                    textTransform: 'none',
                    fontSize: '1rem',
                    padding: '8px 16px',
                    borderRadius: '8px',
                }}
            >
                Sign in With GitHub
            </Button>
        </Box>
    );
};

export default LoginForm;
