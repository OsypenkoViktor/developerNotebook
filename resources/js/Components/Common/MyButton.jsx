import PropTypes from "prop-types";
export default function MyButton({
    onClick,
    name,
    type,
    design
}){
    const designValues={
        "default":"bg-blue-500 hover:bg-blue-700",
        "danger":"bg-red-500 hover:bg-red-700"
    }
    return(
        <button
            type={type === "submit" ? "submit" : "button"}
            className={`rounded-full px-4 py-2 ${designValues[design]} text-white hover:text-gray-100 transition duration-300 ease-in-out`}
        onClick={onClick}
        >
            {name}
        </button>
    )
}

MyButton.propTypes={
    onClick:PropTypes.func,
    name:PropTypes.string,
    type:PropTypes.oneOf(["submit","button"]),
    design:PropTypes.oneOf(["default","danger"]),
}
