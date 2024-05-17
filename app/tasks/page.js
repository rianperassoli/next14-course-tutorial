import TaskForm from "@/components/TaskForm";
import TaskFormCustom from "@/components/TaskFormCustom";
import TaskList from "@/components/TaskList";

export const dynamic = "force-dynamic";

const Tasks = () => {
  return (
    <div className="max-w-lg">
      <p className="my-2">create task without validation</p>
      <TaskForm />

      <p className="mt-8 mb-2">create task with validation (Zod)</p>
      <TaskFormCustom />
      <TaskList />
    </div>
  );
};

export default Tasks;
