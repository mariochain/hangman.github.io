import * as React from "react";
import { cn } from "../../lib/utils";

const Button = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <button
            ref={ref}
            className={cn(
                "inline-flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400",
                className
            )}
            {...props}
        />
    );
});

Button.displayName = "Button";

// Cambiar exportación a named export
export { Button };
