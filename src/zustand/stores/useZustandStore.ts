import create from 'zustand';

interface ZustandStore {
  firstName?: string | null;
  secondName?: string | null;
  setFirstName: (firstName: string) => void;
  setSecondName: (secondName: string) => void;
}

const useZustandStore = create<ZustandStore>()((set) => ({
  firstName: null,
  secondName: null,
  setFirstName: (firstName) =>
    set(() => {
      return { firstName: firstName };
    }),
  setSecondName: (secondName) =>
    set(() => {
      return { secondName: secondName };
    }),
}));

export default useZustandStore;
