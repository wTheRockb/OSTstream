import { CurrentlyPlayingAction } from 'src/components/CurrentlyPlaying/ducks/actions';
import { CurrentlyPlayingReducerState } from 'src/components/CurrentlyPlaying/ducks/reducers';

export interface OstStreamState {
    readonly currentlyPlayingState: CurrentlyPlayingReducerState;
}

export interface GenericOstStreamAction<T, P> {
    readonly type: T;
    readonly payload: P;
}

export type OstStreamAction = CurrentlyPlayingAction;