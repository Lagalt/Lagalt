import { Modal, Button } from 'react-bootstrap';
import ChangeInfoTemplateX from './ChangeInfoTemplateX';

function ChangeInfoX(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Create Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ChangeInfoTemplateX
          dbuser={props.dbuser}
          setload={props.setload}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ChangeInfoX;