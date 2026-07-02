import type { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

type Props = {
    children: ReactNode;
    input: ReactNode;
};

export default function AppLayout({
    children,
    input,
}: Props) {
    return (
        <div className="flex h-screen overflow-hidden bg-[#09090B]">

            <Sidebar />

            <div className="flex min-w-0 flex-1 flex-col">

                <Header />

                <main className="relative flex min-h-0 flex-1 flex-col overflow-hidden">

                    <div className="flex min-h-0 flex-1 flex-col">

                        <div className="min-h-0 flex-1 overflow-hidden">
                            {children}
                        </div>

                        {/* <div className="shrink-0">
                            {input}
                        </div> */}

                    </div>

                    {input}

                </main>

            </div>

        </div>
    );
}