import React from "react";
import './Button.css';

interface ButtonProps {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    type?: "button" | "submit" | "reset";
    variant?: "primary" | "secondary" | "outline" | "destructive";
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled,
    className,
    type = "button",
    variant = "primary",
}) => {
    const getButtonStyle = () => {
        switch (variant) {
            case "primary":
                return "button-primary";
            case "secondary":
                return "button-secondary";
            case "outline":
                return "button-outline";
            case "destructive":
                return "button-destructive";
            default:
                return "";
        }
    };

    return (
        <button
            className={`button ${getButtonStyle()} ${className || ''}`}
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            {label}
        </button>
    );
};

export default Button;
