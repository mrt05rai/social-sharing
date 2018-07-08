export default function reducer(state = {
  auth: '', changingStatus: ''
}, action) {
  switch (action.type) {
    case 'SIGN_UP_SUCCESS': {
      return { ...state, changingStatus: 'success', auth: action.payload };
    }
    case 'SIGN_UP_FAILED': {
      return { ...state, changingStatus: 'failed' };
    }
    default: {
      return state;
    }
  }
}
