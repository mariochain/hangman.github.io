import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { cn } from "../../lib/utils";

export const AlertDialog = AlertDialogPrimitive.Root;

export const AlertDialogTrigger = React.forwardRef(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Trigger
        ref={ref}
        className={cn(
            "inline-flex items-center rounded bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400",
            className
        )}
        {...props}
    />
));

export const AlertDialogContent = React.forwardRef(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Content
        ref={ref}
        className={cn(
            "fixed inset-0 z-50 flex items-center justify-center bg-black/50", // Fondo oscuro semitransparente para el overlay
            className
        )}
        {...props}
    >
        <div
            className="relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-lg" // Fondo blanco sólido para el contenido
        >
            {props.children}
        </div>
    </AlertDialogPrimitive.Content>
));

export const AlertDialogHeader = ({ className, ...props }) => (
    <div className={cn("mb-4", className)} {...props} />
);

export const AlertDialogTitle = React.forwardRef(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Title
        ref={ref}
        className={cn("text-lg font-bold", className)}
        {...props}
    />
));

export const AlertDialogDescription = React.forwardRef(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Description
        ref={ref}
        className={cn("text-sm text-gray-500", className)}
        {...props}
    />
));

export const AlertDialogFooter = ({ className, ...props }) => (
    <div className={cn("mt-4", className)} {...props} />
);

export const AlertDialogAction = React.forwardRef(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Action
        ref={ref}
        className={cn(
            "inline-flex items-center rounded bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400",
            className
        )}
        {...props}
    />
));
