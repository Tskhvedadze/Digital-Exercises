import { useState } from 'react'

import { Container, Card, Row, Col } from 'react-bootstrap'

import { Loading } from '@/components'

import { UserDetailModal } from './components/UserDetailModal'
import { useFetchUsers } from './hooks/useFetchUsers'

const userModalInit = { show: false, payload: '' }

function UsersView() {
    const { users, loadingUsers } = useFetchUsers()
    const [userModal, setUserModal] = useState(userModalInit)

    return (
        <Container>
            <UserDetailModal
                {...userModal}
                onHide={() => setUserModal(userModalInit)}
            />
            <Row className='g-3'>
                {loadingUsers ? (
                    <Loading />
                ) : (
                    users?.map((user) => (
                        <Col lg={3} md={4} sm={6} key={user.id}>
                            <Card border='dark' className='text-center'>
                                <Card.Header>{user?.username}</Card.Header>
                                <Card.Img variant='top' src={user?.image} />
                                <Card.Body>
                                    <Card.Title>
                                        {user?.firstName} {user?.lastName}
                                    </Card.Title>

                                    <button
                                        className='btn btn-outline-primary'
                                        onClick={() =>
                                            setUserModal({
                                                show: true,
                                                payload: user.id,
                                            })
                                        }
                                    >
                                        User Description
                                    </button>
                                </Card.Body>
                                <Card.Footer className='text-muted'>
                                    {user?.birthDate}
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))
                )}
            </Row>
        </Container>
    )
}

export default UsersView
