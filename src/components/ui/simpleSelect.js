import * as React from "react";

function SimpleSelect({ options, value, onChange, placeholder }) {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleSelect = (selectedValue) => {
        onChange(selectedValue);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block w-full">
            {/* Trigger */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                {value || placeholder || "Seleccione una opción"}
            </button>

            {/* Dropdown */}
            {isOpen && (
                <div className="absolute z-50 mt-2 w-full rounded-md border border-gray-300 bg-white shadow-lg">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            onClick={() => handleSelect(option.value)}
                            className="cursor-pointer px-4 py-2 hover:bg-blue-50"
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SimpleSelect;
