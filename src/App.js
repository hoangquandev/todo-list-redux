import AddToDo from "./components/AddToDo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import { Col, Container, Row } from "react-bootstrap";



function App() {
  return (
    <Container className='bg-secondary py-5'>
      <Row className='justify-content-md-center' >
        <Col sx={12} md={9}>
          <h1 className="text-info text-center">Todo List</h1>
          <AddToDo />
          <TodoList />
          <VisibilityFilters />
        </Col>
      </Row>
    </Container>

  );
}

export default App;
