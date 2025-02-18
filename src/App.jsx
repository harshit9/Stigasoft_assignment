import Navbar from "./components/Navbar"
import Tvl from "./components/Tvl"
import { DataProvider } from "./context/DataContext"

function App() {
  return (
    <DataProvider>
      <div className="flex flex-col bg-gray-900 min-h-dvh">
        <Navbar />
        <Tvl />
      </div>
    </DataProvider>
  )
}

export default App
