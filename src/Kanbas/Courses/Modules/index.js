import ModuleList from "./ModuleList";

function Modules() {
   
  return (
    <div>
    
    <button  className="btn" id={"id4"}>
        Save
      </button>
      <button  className="btn ">
        view progress
      </button>
      <button  className="btn ">
       publish all
      </button>
      <button  className="btn ">
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