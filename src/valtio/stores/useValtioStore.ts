import { proxy } from 'valtio';

interface ValtioState {
  firstName?: string | null;
  secondName?: string | null;
}

const state = proxy<ValtioState>({
  firstName: null,
  secondName: null,
});

const setFirstName = (firstName: string) => {
  state.firstName = firstName;
};

const setSecondName = (secondName: string) => {
  state.secondName = secondName;
};

export { state, setFirstName, setSecondName };
