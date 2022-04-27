import styled from "styled-components";

const DraggableWrapper= styled.div`
  width: 200px;
  height: 120px;
  position: absolute;
  top: 40px;
  left: 227px;
  background-color: rgba(220, 44, 44, 0.5);
  z-index: 100;
  padding-top: 20px;
  
`

const Draggable = () => {

    let offsetX,offsetY
    const moveItem = event => {
        const eventTarget = event.target
        eventTarget.style.left = `${event.pageX-offsetX}px`
        eventTarget.style.top = `${event.pageY-offsetY}px`
    }

    const addItem = event => {
        const eventTarget=event.target
        offsetX = event.clientX-eventTarget.getBoundingClientRect().left
        offsetY = event.clientY-eventTarget.getBoundingClientRect().top
        eventTarget.addEventListener('mousemove',moveItem)
    }
    const removeItem = event => {
        const eventTarget = event.target
        eventTarget.removeEventListener('mousemove',moveItem)
    }

    return (
        <DraggableWrapper onMouseDown={addItem} onMouseUp={removeItem}></DraggableWrapper>
    )
}

export default Draggable