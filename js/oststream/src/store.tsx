import { useState } from 'react';
import { createContainer } from 'react-tracked';
import { GlobalState } from './types/GlobalState'

const initialState: GlobalState = {
    songQueue: [],
    currentSong: undefined
}

const useMyState = () => useState(initialState);

export const {
    Provider: SharedStateProvider,
    useTracked: useSharedState,
  } = createContainer(useMyState);
