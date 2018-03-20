import React, { Component } from 'react';
import Modal from './components/Modal';
import Col from './components/Col'
import Row from './components/Row'
import Carousel from './components/Carousel';
import NameCard from './components/NameCard'
import ProgressBar from './components/ProgressBar'

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
          name="Örn Friðriksson"
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

          <br />
            images={['http://blogs.herald.com/.a/6a00d83451587d69e201901df83045970b-pi',
          <Carousel
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEsBsyagjBiUm9vwwkSTDAdX9-Z3F4-wCtNEV1GSD5L5rNfQPNrg'
            ]}
            size='large' />
      </div>
    );
  }
}

export default App;

