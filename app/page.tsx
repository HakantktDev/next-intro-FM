import NewTodoForm from '@/components/NewTodoFrom';

const getData = async () => {
  await new Promise((res) => setTimeout(() => res(0), 2000));
  return { data: [1, 2, 3] };
};

const Home = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div>
      <NewTodoForm />
    </div>
  );
};
export default Home;
