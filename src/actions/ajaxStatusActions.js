import {
  BEGIN_AJAX_CALL,
  AJAX_CALL_ERROR
} from './types';

function beginAjaxCall () {
  return { type: BEGIN_AJAX_CALL };
}

function ajaxCallError () {
  return { type: AJAX_CALL_ERROR };
}

export {
  beginAjaxCall,
  ajaxCallError
};
