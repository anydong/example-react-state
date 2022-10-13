import useZustandStore from '../stores/useZustandStore';

const ZustandComponentTwo = () => {
  const { firstName, setFirstName } = useZustandStore();

  return (
    <>
      <div>firstName: {firstName}</div>
      <button
        onClick={() => {
          setFirstName('a');
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
