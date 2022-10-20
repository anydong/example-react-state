import useZustandPersist from '../stores/useZustandPersist';
import useZustandStore from '../stores/useZustandStore';

const ZustandComponentTwo = () => {
  const { firstName, setFirstName } = useZustandStore();
  const { name, setName } = useZustandPersist();

  return (
    <>
      <div>firstName: {firstName}</div>
      <div>name: {name}</div>
      <button
        onClick={() => {
          setFirstName('a');
          setName('dddd');
        }}
      >
        设置 firstName
      </button>
      <button
        onClick={() => {
          setFirstName('');
        }}
      >
        reset
      </button>
    </>
  );
};

export default ZustandComponentTwo;
