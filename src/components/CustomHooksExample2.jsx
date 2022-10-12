
import useLocalStaorage from "../hooks/useLocalStaorage";

function CustomHooksExample2() {
  const [task, setTask] = useLocalStaorage('task', '');

  return (
    <div>
      <form className="w-50">
        <div className="mb-3">
          <label className="form-label">Task</label>
          <input
            type="text"
            className="form-control"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default CustomHooksExample2;
