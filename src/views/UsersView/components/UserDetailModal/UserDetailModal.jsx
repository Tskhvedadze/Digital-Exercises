import { Modal } from "react-bootstrap";

export function UserDetailModal({ show, payload, onHide }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Title>{payload}</Modal.Title>
    </Modal>
  );
}
