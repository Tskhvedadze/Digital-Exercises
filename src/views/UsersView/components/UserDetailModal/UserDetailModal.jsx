import { useEffect } from 'react'

import { Loading } from '../../../../components'

import { useFetchUserDetails } from './hook/useFetchUserDetails'

import { Col, Modal, Row, Image } from 'react-bootstrap'
import { Container, ListGroup } from 'react-bootstrap/esm'

export function UserDetailModal({ show, payload, onHide }) {
    const { user, getSingleUser, loading } = useFetchUserDetails({
        url: `https://dummyjson.com/users/${payload}`,
    })

    useEffect(() => {
        if (payload) {
            getSingleUser()
        }
    }, [payload])

    console.log(user)

    return (
        <Modal
            size='lg'
            show={show}
            onHide={onHide}
            centered
            aria-labelledby='contained-modal-title-vcenter'
        >
            {loading ? (
                <Loading mode />
            ) : (
                <>
                    <Modal.Header closeButton>
                        <Modal.Title id='contained-modal-title-vcenter'>
                            {user?.firstName} {user?.lastName}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}
                        >
                            <ListGroup>
                                <ListGroup.Item>
                                    Gender:{' '}
                                    <span className='text-success'>
                                        {user?.gender}
                                    </span>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Username:{' '}
                                    <span className='text-success'>
                                        {user?.username}
                                    </span>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    BirthDate:{' '}
                                    <span className='text-success'>
                                        {user?.birthDate}
                                    </span>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Email:{' '}
                                    <span className='text-success'>
                                        {user?.email}
                                    </span>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Domain:{' '}
                                    <span className='text-success'>
                                        {' '}
                                        {user?.domain}
                                    </span>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    University:{' '}
                                    <span className='text-success'>
                                        {user?.university}
                                    </span>
                                </ListGroup.Item>
                            </ListGroup>
                            <Image
                                rounded
                                thumbnail
                                // width='200px'
                                src={user?.image}
                                alt={user?.firstName}
                            />
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <button
                            onClick={onHide}
                            className='btn btn-outline-primary'
                        >
                            Close
                        </button>
                    </Modal.Footer>
                </>
            )}
        </Modal>
    )
}
