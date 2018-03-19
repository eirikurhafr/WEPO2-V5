import React, { Component } from 'react';
import Modal from './components/Modal';
import NameCard from './components/NameCard'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ isOpen: true })}>Modal</button>
        <Modal 
          isOpen={this.state.isOpen} 
          onClose={() => this.setState({ isOpen: false })}>
          <Modal.Title>Modal Title</Modal.Title>
          <Modal.Body>Modal Body</Modal.Body>
          <Modal.Footer>Modal Footer</Modal.Footer>
        </Modal>
        <NameCard 
          name="Örn Friðriksson"
          email="orn16@ru.is"
          telephone="+354-58-12345"
          imageUrl="https://www.commondreams.org/sites/default/files/styles/cd_large/public/views-article/19225749489_a57875fe79_h.jpg?itok=zFMh4iyP"/>
      </div>
    );
  }
}

export default App;
