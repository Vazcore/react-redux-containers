export const selectUser = (user) => {
  console.log('User choosed', user);
  return {
    type: 'SELECT',
    payload: user
  };
};

export const unselectUser = () => {
  console.log('Unselect', user);
  return {
    type: 'UNSELECT'
  };
};