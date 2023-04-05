import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/operations';
import { getTasks } from 'redux/selectors';

// import { Layout } from 'components/Layout/Layout';
// import { AppBar } from 'components/AppBar/AppBar';
// import { TaskForm } from 'components/TaskForm/TaskForm';
// import { TaskList } from 'components/TaskList/TaskList';

export const App = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getTasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    // <Layout>
    //   <AppBar />
    //   <TaskForm />
    //   <TaskList />
    // </Layout>
    <>
      {isLoading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      <p>{items.length > 0 && JSON.stringify(items, null, 2)}</p>
    </>
  );
};
