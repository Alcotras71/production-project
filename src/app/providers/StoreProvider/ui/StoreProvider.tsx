import { FC } from 'react';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ReducersMapObject } from '@reduxjs/toolkit';

import { createReduxStore } from 'app/providers/StoreProvider/config/store';

import type { StateSchema } from 'app/providers/StoreProvider/types/StateSchema';

interface StoreProviderProps {
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const {
        children,
        initialState,
        asyncReducers,
    } = props;

    // const navigate = useNavigate();

    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
        // navigate,
    );

    console.log('RENDER');

    return (
        <Provider store={store}>
            {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
            <>
                {children}
            </>
        </Provider>
    );
};
