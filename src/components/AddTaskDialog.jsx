import PropTypes from "prop-types"
import { createPortal } from "react-dom"

import Button from "./Button"

const AddTaskDialog = ({ isOpen, handleClose }) => {
  if (!isOpen) return null

  return createPortal(
    <div className="fixed inset-0 flex h-screen w-screen items-center justify-center backdrop-blur-xs">
      <div className="rounded-xl bg-white p-5 text-center shadow">
        <h2 className="text-brand-dark-blue text-xl font-semibold">
          Adicionar Nova Tarefa
        </h2>
        <p className="text-brand-text-gray mt-1 text-sm">
          Insira as informações abaixo
        </p>

        <div className="flex gap-3">
          <Button
            size="large"
            className="w-full"
            color="secondary"
            onClick={handleClose}
            type="button"
          >
            Cancelar
          </Button>
          <Button size="large" className="w-full" disabled={true} type="submit">
            {/* {isSubmitting && <LoaderIcon className="animate-spin" />} */}
            Salvar
          </Button>
        </div>
      </div>
    </div>,
    document.body
  )
}

AddTaskDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default AddTaskDialog
