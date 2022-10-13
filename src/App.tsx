import ValtioComponentOne from './valtio/components/ValtioComponentOne';
import ValtioComponentTwo from './valtio/components/ValtioComponentTwo';
import ZustandComponentOne from './zustand/components/ZustandComponentOne';
import ZustandComponentTwo from './zustand/components/ZustandComponentTwo';

function App() {
  return (
    <>
      <div>
        <h2>Zustand</h2>
        component 1 <br />
        <ZustandComponentOne />
        component 2 <br />
        <ZustandComponentTwo />
      </div>
      <div>
        <h2>Valtio</h2>
        component 1 <br />
        <ValtioComponentOne />
        component 2 <br />
        <ValtioComponentTwo />
      </div>
    </>
  );
}

export default App;
