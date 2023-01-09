import { ReactNode } from "react";

function Container ({
    title,
    children,
}:{
    title :string;
    children : ReactNode;
}) {
    return (
        <div>
            <h1>{title}</h1>
            {children}
        </div>
    );
}
    
  export default Container;
  