import "./App.css";
import { Layout, Row, Col } from "antd";

import Workshop2 from "./components/Workshop2";
import WorkshopForm from "./components/WorkshopForm";
import WorkshopList from "./components/WorkshopList";
import WorkshopEvent from "./components/WorkshopEvent";
import DayOneQuiz from "./components/DayOneQuiz";

const { Header, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout style={{ height: "100vh", overflow: "scroll" }}>
        <Header style={{ color: "#fff" }}>React Class</Header>

        <Content style={{ margin: "60px", textAlign: "center" }}>
          <div>
            <Row>
              <Col xs={24} md={8}>
                <Workshop2></Workshop2>
              </Col>

              <Col xs={24} md={8}>
                <WorkshopForm></WorkshopForm>
              </Col>

              <Col xs={24} md={8}>
                <WorkshopList></WorkshopList>
              </Col>

              <Col xs={24} md={8}>
                <WorkshopEvent></WorkshopEvent>
              </Col>

              <Col xs={24} md={16}>
                <DayOneQuiz></DayOneQuiz>
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
