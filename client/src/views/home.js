import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserById } from '../store/action'
import UserCard from '../components/UserCard'

const Home = () => {
  const history = useHistory()
  const { user } = useSelector(state => state)
  const dispatch = useDispatch()
  console.log(user, 'masuk dari homee')

  useEffect(() => {
    dispatch(fetchUserById(user.id))
  }, [])

  return (
    <div>
      <div key={ user.id }>
        <UserCard
          id={ user.id }
          fullname={ user.fullname }
          username={ user.username }
          password={ user.password }
        />
      </div>
    </div>
  )
}

export default Home