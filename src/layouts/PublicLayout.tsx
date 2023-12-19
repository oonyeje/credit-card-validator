import React, { ReactNode } from "react";

type LayoutProps = {
    children?: ReactNode
}

const PublicLayout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div className="h-screen w-screen flex flex-row justify-center bg-cyan-600">
            <div>
                <div className="mt-4 text-center w-full text-lg text-white font-semibold">Credit Card Validator</div>
                {children}
            </div>
        </div>
    );
};

export default PublicLayout;