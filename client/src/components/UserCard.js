import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Button, Table } from 'react-bootstrap'
import Swal from 'sweetalert2'
import { deleteUser } from '../store/action'

const UserCard = (props) => {
  const history = useHistory()
  const dispatch = useDispatch()

  function handleDelete() {
    Swal.fire({
      title: 'Delete your account?',
      text: 'You will be logged out and have to register again with this account.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00d1b2',
      cancelButtonColor: '#f14668',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.isConfirmed) {
        dispatch(deleteUser(props.id))
      }
    })
  }

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>username</th>
            <th>password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.fullname}</td>
            <td>{props.username}</td>
            <td>{props.password}</td>
            <td>
              <Button onClick={ () => history.push('/edit/' + props.id)}>
                Edit
              </Button>
              <Button onClick={handleDelete}>
                Delete
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default UserCard