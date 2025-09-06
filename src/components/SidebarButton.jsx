import PropTypes from "prop-types"
import { NavLink } from "react-router"
import { tv } from "tailwind-variants"

const sidebarButton = tv({
  base: "hover:text-brand-primary flex w-full items-center gap-2 rounded-lg px-6 py-3 text-left font-medium transition hover:bg-[#E6F7F8]",
  variants: {
    active: {
      true: "text-brand-primary bg-brand-light-blue",
      false: "text-brand-dark-blue",
    },
  },
  defaultVariants: {
    active: false,
  },
})

const SidebarButton = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => sidebarButton({ active: isActive })}
    >
      {children}
    </NavLink>
  )
}

SidebarButton.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
}

export default SidebarButton
