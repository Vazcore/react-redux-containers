export default (state = null, action) => {
  switch (action.type) {
    case 'SELECT':
      return Object.assign({}, action.payload);
    case 'UNSELECT':
      return null;
    default:
      return state;
  }
}