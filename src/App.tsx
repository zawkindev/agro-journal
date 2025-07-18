import Collection from './components/Collection'
import Header from './components/Header'
import './index.css'
import { CardVariant } from './utility'

function App() {
  return (
    <>
      <Header />
      <div className='p-8'>
        <Collection title="Big Stories" cardVariant={CardVariant.Wide} vertical />
      </div>
    </>
  )
}

export default App
