import PropTypes from "prop-types"

const SidebarButton = ({ children, variant = "unselected" }) => {
  const variantButton =
    variant === "selected"
      ? "bg-[#E6F7F8] text-brand-primary"
      : "text-brand-dark-blue"

  return (
    <a
      href="#"
      className={`flex items-center gap-2 rounded-lg px-6 py-3 ${variantButton}`}
    >
      {children}
    </a>
  )
}

SidebarButton.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["selected", "unselected"]),
}

export default SidebarButton
