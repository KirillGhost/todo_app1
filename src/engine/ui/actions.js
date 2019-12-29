// Helpers
import { actionCreator } from '../../lib/helpers/actionCreator';
// Types
import * as uiTypes from './types';

export function setNotificationMessage(message) {
  return actionCreator(uiTypes.SET_NOTIFICATION_MESSAGE, message);
}

