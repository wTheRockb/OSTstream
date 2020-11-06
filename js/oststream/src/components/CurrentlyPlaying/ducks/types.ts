import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { OstStreamAction, OstStreamState } from 'src/types/Index';

export type CurrentlyPlayingDispatch = ThunkDispatch<
    OstStreamState,
    {},
    OstStreamAction>;

export type CurrentlyPlayingThunkAction<R> = ThunkAction<
    R,
    OstStreamState,
    {},
    OstStreamAction>;
