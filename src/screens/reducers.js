// @flow

// Types
type Action = { +type: string };
type State = ?Object;

// Reducer
export default (state: State = null, action: Action): State => state;
