export function TaskList() {
  const tasks = [
    {
      id: '1',
      title: 'Grocery Shopping',
      assignee: 'Mom',
      time: 'Today, 5:00 PM'
    },
    {
      id: '2',
      title: 'Homework Help',
      assignee: 'Dad',
      time: 'Today, 7:00 PM'
    },
    {
      id: '3',
      title: 'Family Movie Night',
      assignee: 'Everyone',
      time: 'Today, 8:30 PM'
    }
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Today's Tasks</h2>
      <div className="space-y-2">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}

function TaskItem({ task }: { task: any }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
      <div className="flex items-center space-x-4">
        <input type="checkbox" className="rounded" />
        <div>
          <div className="font-medium">{task.title}</div>
          <div className="text-sm text-gray-500">{task.assignee}</div>
        </div>
      </div>
      <div className="text-sm text-gray-500">{task.time}</div>
    </div>
  )
}
