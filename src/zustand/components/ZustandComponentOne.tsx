import * as React from 'react';
import useZustandStore from '../stores/useZustandStore';

const ZustandComponentOne = () => {
    const { firstName } = useZustandStore();

    return <div>firstName: {firstName}</div>;
};

export default ZustandComponentOne;
