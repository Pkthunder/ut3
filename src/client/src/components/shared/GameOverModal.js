import React from 'react';
import { Modal, Header, Button } from 'semantic-ui-react';

const GameOverModal = (props) => {
  const modalProps = {
    size: 'small',
    dimmer: 'blurring',
    closeOnDimmerClick: false
  };

  return (
    <Modal {...modalProps} open={props.open}>
      <Modal.Content>
        <Modal.Description style={{textAlign: 'center'}}>
          <Header>Player {props.winner} has won!</Header>
          <div>
            <Button>View Recap</Button>
            <Button>Play Again</Button>
          </div>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default GameOverModal;