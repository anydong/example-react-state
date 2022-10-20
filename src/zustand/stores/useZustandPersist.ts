import create from 'zustand';
import { persist } from 'zustand/middleware';

const useZustandPersist = create<any>()(
  persist(
    (set, get) => ({
      name: undefined,
      setName: (name: string) =>
        set(() => {
          return { name: name };
        }),
    }),
    {
      name: 'zustand',
    },
  ),
);

export default useZustandPersist;
