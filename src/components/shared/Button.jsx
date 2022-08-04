
const Button = ({ children, className, ...props }) => {
    return (
        <button
            {...props}
            className={`w-fit h-fit bg-gray-800 rounded-lg text-focusable ${className}`}
        >
            { children }
        </button>
    )
}

export default Button