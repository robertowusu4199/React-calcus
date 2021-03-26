import React from 'react';
import Button from './components/Button';
import Col from './components/Col';
import Container from './components/Container';
import Row from './components/Row';
import Displayscreen from './components/Displayscreen'

function App() {
  return (
    <Container>

      <Displayscreen/>

      <Row>
        <Col size={3}>
          <Button style={style.greyButton} block>
            AC
          </Button>
        </Col>

        <Col size={3}>
          <Button style={style.greyButton} block>
            +/-
          </Button>
        </Col>

        <Col size={3}>
          <Button style={style.greyButton} block>
            %
          </Button>
        </Col>

        <Col size={3}>
          <Button style={style.goldButton} block>
            ÷
          </Button>
        </Col>
      </Row>

      <Row>
        <Col size={3}>
          <Button style={style.greyButton} block>
            7
          </Button>
        </Col>

        <Col size={3}>
          <Button style={style.greyButton} block>
            8
          </Button>
        </Col>

        <Col size={3}>
          <Button style={style.greyButton} block>
            9
          </Button>
        </Col>

        <Col size={3}>
          <Button style={style.goldButton} block>
            x
          </Button>
        </Col>
      </Row>

      <Row>
        <Col size={3}>
          <Button style={style.greyButton} block>
            6
          </Button>
        </Col>

        <Col size={3}>
          <Button style={style.greyButton} block>
            5
          </Button>
        </Col>

        <Col size={3}>
          <Button style={style.greyButton} block>
            4
          </Button>
        </Col>

        <Col size={3}>
          <Button style={style.goldButton} block>
            -
          </Button>
        </Col>
      </Row>

      <Row>
        <Col size={3}>
          <Button style={style.greyButton} block>
            1
          </Button>
        </Col>

        <Col size={3}>
          <Button style={style.greyButton} block>
            2
          </Button>
        </Col>

        <Col size={3}>
          <Button style={style.greyButton} block>
            3
          </Button>
        </Col>

        <Col size={3}>
          <Button style={style.goldButton} block>
            +
          </Button>
        </Col>
      </Row>

      <Row>
        <Col size={6}>
          <Button style={style.greyButton} block>
            0
          </Button>
        </Col>

        <Col size={3}>
        <Button style={style.greyButton}>
          .
        </Button>
        </Col>

        <Col size={3}>
        <Button style={style.goldButton}>
          =
        </Button>
        </Col>
        
      </Row>

    </Container>
  )
}




const style = {
  goldButton: { backgroundColor: 'gold',
  borderColor:'black', 
  borderWidth: 0.5, 
  borderRadius: 0,
  color: 'white' },

  greyButton: { backgroundColor: '#aaa', 
  borderColor:'black', 
  borderWidth: 0.5, 
  borderRadius: 0,
  color: '#333', }
}


export default App;
