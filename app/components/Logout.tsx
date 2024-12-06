import {doLogout} from "@/app/actions"

const Logout: React.FC = () => {
    return (
        <form action={doLogout} method="post">
            <button
                className="bg-black text-white p-1 rounded-md m-1 text-lg"
                type="submit"
                name="action"
                value="github"
            >
                Logout
            </button>
        </form>
    );
};

export default Logout;