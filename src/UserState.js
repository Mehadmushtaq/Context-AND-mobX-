//optional

import userContext from './context';

const UserState = (props) => {
  const user = {
    name: 'mehad',
    email: 'mehad@optima.pk',
  };

  return (
    <userContext.Provider value={user}>{props.children}</userContext.Provider>
  );
};

export default UserState;
