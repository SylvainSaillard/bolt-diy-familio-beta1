export function Stats() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <StatCard
        title="Events"
        value="3"
        icon="calendar"
        className="bg-blue-50"
      />
      <StatCard
        title="Tasks"
        value="5"
        icon="check"
        className="bg-purple-50"
      />
      <StatCard
        title="Family"
        value="4"
        icon="users"
        className="bg-green-50"
      />
      <StatCard
        title="Saved"
        value="12h"
        icon="clock"
        className="bg-yellow-50"
      />
    </div>
  )
}

function StatCard({ 
  title, 
  value, 
  icon, 
  className 
}: { 
  title: string
  value: string
  icon: string
  className?: string
}) {
  return (
    <div className={`p-4 rounded-lg ${className}`}>
      <div className="text-sm text-gray-600">{title}</div>
      <div className="text-2xl font-bold mt-1">{value}</div>
    </div>
  )
}
