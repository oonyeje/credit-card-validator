import React, { ReactNode } from "react";

type LayoutProps = {
    children?: ReactNode
}

const PublicLayout: React.FC<LayoutProps> = ({children}) => {
    return (
        <div className="h-screen w-screen flex flex-row justify-center bg-cyan-600">
                {children}
        </div>
    );
};

export default PublicLayout;