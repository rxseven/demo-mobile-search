/* eslint-disable import/prefer-default-export */
import { getDomain } from 'selectors';

// Non-memoized utility selector
export const getNode = state => getDomain(state, ['data']);
