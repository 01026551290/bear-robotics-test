import styled from "styled-components";
import Draggable from "./components/Draggable";

const Box = styled.div`
  cursor: move;
`

function App() {

    return (
        <Draggable>
            <Box>BOX</Box>
        </Draggable>
    )
}

export default App;
