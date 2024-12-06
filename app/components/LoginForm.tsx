import { doSocialLogin } from "@/app/actions";

const LoginForm: React.FC = () => {
    return (
        <form action={doSocialLogin} method="post">
            <button
                className="bg-black text-white p-1 rounded-md m-1 text-lg"
                type="submit"
                name="action"
                value="github"
            >
                Sign in with GitHub
            </button>
        </form>
    );
};

export default LoginForm;
