import FloorPlan from './FloorPlan'
import './App.css'

function App() {
  const rooms = [
    {
      name: 'LivingRoom'
    },
    {
      name: 'Bedroom',
      bedNum: ['1', '2', '3']
    },
    {
      name: 'Kitchen'
    },
    {
      name: 'Bath',
      size: ['Half', 'Full']

    },
  ]
  return (
    <div>
    <FloorPlan rooms={rooms} />
    </div>
  )
}

export default App
