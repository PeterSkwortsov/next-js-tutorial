
import React from 'react'
import { editTask } from '@/utils/actions'

const EditForm = ({task}) => {
  const {id, completed, content} = task
  return (
    <form
      action={editTask}
      className="max-w-sm p-12 border border-base-300 rounded-lg shadow-lg from-background"
    >
      <input type="hidden" name="id" value={id} />
      {/* content */}
      <input
        type="text"
        required
        defaultValue={content}
        className="input input-bordered w-full"
        name="content"
      />
      {/* completed */}

      <div className="form-control my-4">
        <label htmlFor="completed" className="label cursor-pointer">
          <span className="label-text ">Выполнено</span>
          <input
            type="checkbox"
            name="completed"
            defaultChecked={completed}
            className="checkbox checkbox-primary checkbox-sm"
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary btn-sm">
        Отправить
      </button>
    </form>
  );
}

export default EditForm