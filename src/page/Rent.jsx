import React from 'react'
import { RequestRent } from '../component'
import { useDispatch, useSelector } from 'react-redux';
import { allUserFetch } from '../api/user';
import { Preloader } from '../ui';

const Rent = () => {
  const dispath = useDispatch();
  React.useEffect(() => {
    dispath(allUserFetch());
  }, []);
  const usersState = useSelector(state => state.user);


  const renderHTML = () => {
    if (usersState.user.length === 0) {
      return <Preloader />
    } else {
      return <RequestRent users={usersState} />
    }
  }


  return (
    <>
      {renderHTML()}
    </>
  )
}

export default Rent