import Navbar from "./components/Navbar"
import Tvl from "./components/Tvl"
import { DataProvider } from "./context/DataContext"

function App() {
  return (
    <DataProvider>
      <div className="flex flex-col items-center justify-center">
        <Navbar />
        <Tvl />
      </div>
    </DataProvider>
  )
}

export default App
