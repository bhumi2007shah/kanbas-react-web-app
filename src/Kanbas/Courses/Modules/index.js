import ModuleList from "./ModuleList";

function Modules() {
   
  return (
    <div>
    
    <button   >
        Save
      </button>
      <button  >
        view progress
      </button>
      <button  >
       publish all
      </button>
      <button  >
        + module
      </button>
    
    <div className="row">
      <h2>Modules</h2>
      <ModuleList />
    </div>
    </div>
  );
}
export default Modules