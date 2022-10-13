import { useSnapshot } from 'valtio';
import { setFirstName, state } from '../stores/useValtioStore';

const ValtioComponentOne = () => {
  const { firstName } = useSnapshot(state);
  return (
    <div>
      <div>firstName: {firstName}</div>
      <button
        onClick={() => {
          setFirstName('');
        }}
      >
        reset
      </button>
    </div>
  );
};

export default ValtioComponentOne;
