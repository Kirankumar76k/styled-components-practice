import {Heading, Button} from './styledComponents'

import './App.css'

const App = () => (
  <div>
    <Heading>Hello World</Heading>
    <Button type="button" color="green" bgColor="red" outline={false}>
      Click Me
    </Button>
    <Button type="button" color="yellow" bgColor="blue" outline={true}>
      Click Me
    </Button>
  </div>
)

export default App
