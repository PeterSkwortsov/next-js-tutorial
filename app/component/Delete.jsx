import { deleteTask } from "@/utils/actions"



const Delete = ({id}) => {
   
    return (
      <form action={deleteTask}>
        <input type="hidden" name="id" value={id} />
        <button className="btn btn-xs btn-error">Удалить</button>
      </form>
    );
}
export default Delete