import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Home = async () => {
    const session = await auth();
    console.log(session);
    return (
        <>
            <h1 className="text-3xl font-black text-primary-500 font-space-grotesk">
                Welcome to DevFlow
            </h1>
        </>
    );
};

export default Home;
