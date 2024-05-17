import { editTask } from "@/utils/actions";

const EditForm = ({ task }) => {
  const { id, completed, content } = task;

  return (
    <form
      action={editTask}
      className="max-w-sm p-12 border border-base-300 rounded-lg"
    >
      <input type="hidden" name="id" value={id} />
      <input
        type="text"
        name="content"
        className="input input-bordered w-full"
        defaultValue={content}
        required
      />

      <div className="form-control my-4">
        <label htmlFor="completed" className="label cursor-pointer">
          <span className="label-text">completed</span>
          <input
            type="checkbox"
            id="completed"
            name="completed"
            className="checkbox checkbox-primary checkbox-sm"
            defaultChecked={completed}
          />
        </label>
      </div>

      <button type="submit" className="btn btn-primary btn-block btn-sm">
        edit
      </button>
    </form>
  );
};

export default EditForm;
