const SidebarButton = ({ children, variant = "unselected" }) => {
  const variantButton =
    variant === "selected" ? "bg-[#E6F7F8] text-[#00ADB5]" : "text-[#35383E]"

  return (
    <a
      href="#"
      className={`flex items-center gap-2 rounded-lg px-6 py-3 ${variantButton}`}
    >
      {children}
    </a>
  )
}

export default SidebarButton
