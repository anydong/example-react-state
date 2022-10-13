import { useSnapshot } from 'valtio';
import { setFirstName, state } from '../stores/useValtioStore';

const ValtioComponentTwo = () => {
  const { firstName } = useSnapshot(state);
  return (
    <>
      <div>firstName: {firstName}</div>
      <button
        onClick={() => {
          setFirstName('b');
        }}
      >
        设置 firstName
      </button>
    </>
  );
};

export default ValtioComponentTwo;
