export default function reducer(state = {
  auth: '',
}, action) {
  switch (action.type) {
    case 'LOGIN_INITATED': {
      return { ...state, changingStatus: 'uninitiated' };
    }
    case 'LOGIN_STARTED': {
      return { ...state, changingStatus: 'ongoing' };
    }
    case 'LOGIN_SUCCESS': {
      return { ...state, changingStatus: 'success', auth: action.payload };
    }
    case 'LOGIN_FAILED': {
      return { ...state, changingStatus: 'failed' };
    }
    default: {
      return state;
    }
  }
}
