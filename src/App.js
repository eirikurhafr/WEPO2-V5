import React, { Component } from 'react';
import Modal from './components/Modal';
import ProgressBar from './components/ProgressBar'
import NameCard from './components/NameCard'
import Row from './components/Row'
import Col from './components/Col'


import { modalButton, progressBars } from './index.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  render() {
    return (
      <div>
        <button className={ modalButton } onClick={() => this.setState({ isOpen: true })}>Modal</button>
        <Modal 
          isOpen={this.state.isOpen} 
          onClose={() => this.setState({ isOpen: false })}>
          <Modal.Title>Modal Title</Modal.Title>
          <Modal.Body>Modal Body</Modal.Body>
          <Modal.Footer>Modal Footer</Modal.Footer>
        </Modal>
        <NameCard 
          name="Örn Friðriksson la lal ala l fsdlsdfh lksdnhflakdjbf lksdglkhsdflkasdlkskd "
          email="orn16@ru.is"
          telephone="+354-58-12345"
          imageUrl="https://i.imgur.com/51sJROo.png"/>
        
          <div className={progressBars}>
            <ProgressBar
              progress={90}
              striped={true}
              animated={false} 
              state='info' />
            <ProgressBar
              progress={40}
              striped={false}
              animated={true} 
              state='success' />
            <ProgressBar
              progress={60}
              striped={true}
              animated={true} 
              state='warning' />
            <ProgressBar
              progress={75}
              striped={false}
              animated={false} 
              state='danger' />
          </div>
              <Row>
                <Col size={12}></Col>
                <Col size={4}></Col>
                <Col size={4}></Col>
                <Col size={4}></Col>
                <Col size={4}></Col>
              
              </Row> 
          <div >

          </div>
          
      </div>
    );
  }
}

export default App;

