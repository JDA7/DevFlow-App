import Navbar from "@/components/navigation/navbar";
import ReactNode from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <Navbar />
            {children}
        </main>
    );
};

export default RootLayout;
