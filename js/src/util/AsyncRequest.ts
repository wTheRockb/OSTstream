// // import { SPAction } from '../types';
// import uuid from 'uuid';
// import { Reducer } from 'redux';

// export interface SPAction<T, P> {
//     readonly type: T;
//     readonly payload: P;
// }

// export enum AsyncRequestKinds {
//     NotStarted = 'NotStarted',
//     Loading = 'Loading',
//     Completed = 'Completed',
//     Failed = 'Failed'
// }

// interface NotStarted {
//     kind: AsyncRequestKinds.NotStarted;
// }

// interface Loading {
//     kind: AsyncRequestKinds.Loading;
// }

// interface Completed<R> {
//     kind: AsyncRequestKinds.Completed;
//     result: R;
// }

// interface Failed<E> {
//     kind: AsyncRequestKinds.Failed;
//     error: E;
// }

// export type AsyncRequest<R, E> =
//     | Completed<R>
//     | Failed<E>
//     | Loading
//     | NotStarted;

// export function AsyncRequestNotStarted<R, E>(): AsyncRequest<R, E> {
//     return {
//         kind: AsyncRequestKinds.NotStarted
//     };
// }

// export function AsyncRequestLoading<R, E>(): AsyncRequest<R, E> {
//     return {
//         kind: AsyncRequestKinds.Loading
//     };
// }

// export function AsyncRequestFailed<R, E>(error: E): AsyncRequest<R, E> {
//     return {
//         kind: AsyncRequestKinds.Failed,
//         error
//     };
// }

// export function AsyncRequestCompleted<R, E>(result: R): AsyncRequest<R, E> {
//     return {
//         kind: AsyncRequestKinds.Completed,
//         result
//     };
// }

// export function asyncRequestIsLoading<R, E>(
//     request: AsyncRequest<R, E>
// ): boolean {
//     switch (request.kind) {
//         case AsyncRequestKinds.Loading:
//             return true;
//         case AsyncRequestKinds.NotStarted:
//         case AsyncRequestKinds.Failed:
//         case AsyncRequestKinds.Completed:
//             return false;
//     }
// }

// export function asyncRequestIsFailed<R, E>(
//     request: AsyncRequest<R, E>
// ): boolean {
//     switch (request.kind) {
//         case AsyncRequestKinds.Failed:
//             return true;
//         case AsyncRequestKinds.NotStarted:
//         case AsyncRequestKinds.Loading:
//         case AsyncRequestKinds.Completed:
//             return false;
//     }
// }
// export const ASYNC_REQUEST_LOADING_ACTION = 'asyncLoading';
// export const ASYNC_REQUEST_LOADED_ACTION = 'asyncLoaded';
// export const ASYNC_REQUEST_FAILED_ACTION = 'asyncFailed';
// interface LoadingPayload {
//     readonly key: string;
// }
// interface LoadedPayload<R> {
//     readonly key: string;
//     readonly response: R;
// }
// interface FailedPayload<E> {
//     readonly key: string;
//     readonly error: E;
// }

// export type AsyncRequestAction<R, E> =
//     | SPAction<typeof ASYNC_REQUEST_LOADING_ACTION, LoadingPayload>
//     | SPAction<typeof ASYNC_REQUEST_LOADED_ACTION, LoadedPayload<R>>
//     | SPAction<typeof ASYNC_REQUEST_FAILED_ACTION, FailedPayload<E>>;

// export function genericAsyncActions<R, E>(): {
//     loading: () => SPAction<typeof ASYNC_REQUEST_LOADING_ACTION, LoadingPayload>;
//     loaded: (
//         r: R
//     ) => SPAction<typeof ASYNC_REQUEST_LOADED_ACTION, LoadedPayload<R>>;
//     failed: (
//         e: E
//     ) => SPAction<typeof ASYNC_REQUEST_FAILED_ACTION, FailedPayload<E>>;
//     key: string;
// } {
//     const key = uuid.v4();

//     const loading = (): SPAction<
//         typeof ASYNC_REQUEST_LOADING_ACTION,
//         LoadingPayload
//         > => ({
//         type: ASYNC_REQUEST_LOADING_ACTION,
//         payload: { key }
//     });

//     const loaded = (
//         response: R
//     ): SPAction<typeof ASYNC_REQUEST_LOADED_ACTION, LoadedPayload<R>> => ({
//         type: ASYNC_REQUEST_LOADED_ACTION,
//         payload: { key, response }
//     });

//     const failed = (
//         error: E
//     ): SPAction<typeof ASYNC_REQUEST_FAILED_ACTION, FailedPayload<E>> => ({
//         type: ASYNC_REQUEST_FAILED_ACTION,
//         payload: { key, error }
//     });

//     return {
//         loading,
//         loaded,
//         failed,
//         key
//     };
// }

// export function generateAsyncRequestReducer<S, R, E>(key: string) {
//     const genericReducer: Reducer<
//         AsyncRequest<R, E>,
//         AsyncRequestAction<R, E>
//         > = (
//         state: AsyncRequest<R, E> = AsyncRequestNotStarted<R, E>(),
//         action: AsyncRequestAction<R, E>
//     ) => {
//         switch (action.type) {
//             case ASYNC_REQUEST_LOADING_ACTION:
//                 if (action.payload.key === key) {
//                     return AsyncRequestLoading<R, E>();
//                 }
//                 break;
//             case ASYNC_REQUEST_LOADED_ACTION:
//                 if (action.payload.key === key) {
//                     return AsyncRequestCompleted<R, E>(action.payload.response);
//                 }
//                 break;
//             case ASYNC_REQUEST_FAILED_ACTION:
//                 if (action.payload.key === key) {
//                     return AsyncRequestFailed<R, E>(action.payload.error);
//                 }
//                 break;
//         }
//         return state;
//     };
//     return genericReducer;
// }
