import { MdCancel } from "react-icons/md";

const FloatingContainer = ({open, setOpen, children}) =>{
  return(
      <div className={`fixed inset-0 bg-black bg-opacity-50 h-screen flex flex-col justify-center items-center transition-opacity duration-300 text-unicoop ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`} style={{zIndex:120}}>
        <div className={`shadow-md border rounded-md mx-auto w-2/3 transition-transform duration-300 transform ${open ? 'scale-100 translate-y-0' : 'scale-95 -translate-y-10'}`}>
          {children}
        </div>
        <button type="button" className="flex items-center mt-3 gap-1 p-1.5 mx-auto bg-buttons-delete-red hover:bg-buttons-delete-red-h duration-150 rounded" onClick={() => setOpen(false)}>
            <MdCancel className='bg-transparent text-lg'/> Cancelar
        </button>
      </div>
  );
}

export default FloatingContainer;