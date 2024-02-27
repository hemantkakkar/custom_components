import { useRef } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";
import Form, {FormHandle} from "./components/Form";

function App() {
  const customForm = useRef<FormHandle>(null)

  function handleSave(data: unknown) {
    if(!data || typeof data !== 'object' || !('name' in data) || !('age' in data)) {
      return;
    }
    // const extractedData = data as {name: string, age: string}
    console.log(data)
    customForm.current?.clear()
  }

  return (<main>
    <Form onSave={handleSave} ref={customForm}>
      <Input id="name" label = "Your name" type="text"/>
      <Input id="age" label = "Your age" type="number"/>
      <p><Button>Save</Button></p>
    </Form>
      <p><Button href="https://google.com"> A link</Button></p>
      <Container as={Button}>click me</Container>
    </main>)
}

export default App;
