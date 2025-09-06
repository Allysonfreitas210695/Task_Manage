import SidebarButton from "../components/SidebarButton"

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center">
      <h1 className="text-brand-primary text-6xl font-bold">404</h1>
      <p className="text-brand-dark-gray mt-4 text-lg">
        Oops! Página não encontrada.
      </p>
      <div className="mt-3 flex items-center">
        <SidebarButton to="/">Voltar para Home</SidebarButton>
      </div>
    </div>
  )
}

export default NotFound
