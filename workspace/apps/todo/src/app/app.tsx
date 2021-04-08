import React, {useState} from 'react';
import { useQuery,useMutation, client, lists, tasks, order_by } from '../../../../libs/gql/src'

import('@gqless/logger').then(({ createLogger }) => {
  const logger = createLogger(client);
  logger.start();
});


const Task = ({task, tasks} : {task: tasks, tasks: tasks[]}) => {
  const [update_task_status] = useMutation(
    (mutation, args: { id: number, status: boolean }) => {
      mutation.update_tasks_by_pk({pk_columns: {id: args.id},_append: {details: {status: !args.status}}}).id
    },
    {
      onError(error) {
        console.error(error)
      },
      refetchQueries: [tasks],
      awaitRefetchQueries: true,
      suspense: false,
    }
  );
  const [remove_task] = useMutation(
    (mutation, args: { id: number }) => {
      mutation.delete_tasks({where: {id: {_eq: args.id}}}).affected_rows
    },
    {
      onError(error) {
        console.error(error)
      },
      refetchQueries: [tasks],
      awaitRefetchQueries: false,
      suspense: false,
    }
  );
  const status = task.details({path: "$.status"})
  return (
    <>
      <div className="flex items-center mb-4">
          <p className={"w-full " + (status ? "text-green-700 line-through" : "text-grey-900")}>{task.name}</p>
          <p>{status}</p>
          <button onClick={() => update_task_status({args: {id: task.id, status}})} className={"p-2 ml-4 mr-2 border-2 rounded flex-no-shrink hover:text-gray-50 "  + (status ? "text-gray-400 border-gray-300 hover:bg-gray-500" : "text-green-500 border-green-400 hover:bg-green-500")}>{status ? "Not Done" : "Done"}</button>
          <button onClick={() => remove_task({args: {id: task.id}})} className="p-2 ml-2 text-red-500 border-2 border-red-500 rounded flex-no-shrink hover:text-gray-50 hover:bg-red-500">Remove</button>
      </div>
    </>
  )
}

const Todo = ({list, todoList} : {list: lists, todoList: lists[]}) => {
  const [name, setName] = useState("")
  const [insert_tasks_one] = useMutation(
    (mutation, args: { name: string, list_id: number }) => {
      mutation.insert_tasks_one({object: {...args, ...{ details: {foo: "bar",status: false}}}}).id
    },
    {
      onError(error) {
        console.error(error)
      },
      onCompleted() {
        setName("")
      },
      refetchQueries: [todoList],
      awaitRefetchQueries: true,
      suspense: false,
    }
  );
  const tasks = list.tasks({order_by: [{id: order_by.asc}]})
  return (
    <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
            <h1 className="text-gray-900">{list.name} - {tasks.length} Task{tasks.length > 1 ? "s" : ""}</h1>
            <div className="flex mt-4">
                <input value={name} onChange={(ev) => setName(ev.target.value)} className="w-full px-3 py-2 mr-4 text-gray-600 border rounded shadow appearance-none" placeholder="Add Todo" />
                <button className="p-2 border-2 rounded flex-no-shrink text-indigo border-indigo hover:text-gray-50 hover:bg-indigo-500" onClick={() => insert_tasks_one({args : {name, list_id: list.id}})}>Add</button>
            </div>
        </div>
        <div>
            {tasks.map((t, idx) => <Task task={t} key={idx} tasks={tasks}/>)}
        </div>
    </div>
  )
}

export function App() {
  const { lists } = useQuery()
  const todoList = lists()
  return (
    <div className="flex items-center justify-center w-full h-screen font-sans bg-indigo-200">
      {todoList.map((l,idx) => <Todo key={idx} list={l} todoList={todoList} />)}
    </div>
  );
}

export default App;
