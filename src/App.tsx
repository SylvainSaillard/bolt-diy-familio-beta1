import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Navigation } from '@/components/layout/Navigation'
import { Stats } from '@/components/dashboard/Stats'
import { Assistant } from '@/components/assistant/Assistant'
import { TaskList } from '@/components/tasks/TaskList'

function Home() {
  return (
    <div className="space-y-8">
      <Stats />
      <Assistant />
      <TaskList />
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8 pb-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calendar" element={<div>Calendar Page</div>} />
            <Route path="/assistant" element={<Assistant />} />
            <Route path="/docs" element={<div>Docs Page</div>} />
            <Route path="/profile" element={<div>Profile Page</div>} />
          </Routes>
        </main>
        <Navigation />
      </div>
    </Router>
  )
}
