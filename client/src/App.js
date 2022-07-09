import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Spinner} from 'react-bootstrap'
import AppRouter from './components/AppRouter';
import SiteNavBar from './components/SiteNavBar';
import {observer} from 'mobx-react-lite';
import {Context} from './index'
import {check} from './http/userAPI'

const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      check().then(dat => {
        user.setUser(true);
        user.setIsAuth(true)
      }).finally(() => setLoading(false))
    }, 1000)
  }, [])

  if (loading) {
    return <Spinner animation={'grow'} />
  }

  return (
    <BrowserRouter>
      <SiteNavBar />
      <AppRouter />
    </BrowserRouter>
  )
});

export default App;
