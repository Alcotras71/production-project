import { FC } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';

import { createReduxStore } from 'app/providers/StoreProvider/config/store';

import type { StateSchema } from 'app/providers/StoreProvider/types/StateSchema';

interface StoreProviderProps {
    initialState?: DeepPartial<StateSchema>
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const {
        children,
        initialState,
    } = props;

    const store = createReduxStore(initialState as StateSchema);

    return (
        <Provider store={store}>
            {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
            <>
                {children}
            </>
        </Provider>
    );
};
