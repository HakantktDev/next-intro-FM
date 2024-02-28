import db from '@/utils/db';
import TodoList from '@/components/TodoList';

const getData = async () => {
  const todos = await db.todo.findMany({});
  console.log(todos);
  return todos;
};

const TodoPage = async () => {
  await new Promise<void>((resolve, reject) =>
    setTimeout(() => reject(), 2000)
  );
  const todos = await getData();
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  );
};
export default TodoPage;
