const Button = ({ children, variant = "primary", onClick }) => {
  const variantButton = {
    primary: "bg-[#00ADB5] text-white",
    ghost: "bg-transparent text-[#818181]",
  }
  return (
    <button
      className={`${variantButton[variant]} flex cursor-pointer items-center gap-2 rounded-md px-3 py-1 text-xs transition-colors hover:opacity-75`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
