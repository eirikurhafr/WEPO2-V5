import React, { Component } from 'react';
import Modal from './components/Modal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isModalOpen: false };
  }
  render() {
    const { isModalOpen } = this.state;
    return (
      <div>
        <button onClick={() => this.setState({ isModalOpen: true })}>Modal</button>
        <Modal isOpen={isModalOpen} onClose={() => this.setState({ isModalOpen: false })}>
          <Modal.Title>Modal Title</Modal.Title>
          <Modal.Body>Modal Body</Modal.Body>
          <Modal.Footer>Modal Footer</Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default App;
