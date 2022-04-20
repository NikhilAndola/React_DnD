import "./styles.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DragDrop } from "./components/DragDrop";
export default function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <h2>Drag and Drop in reactJs!</h2>
      <h3>React DnD</h3>
      <div className="App">
        <DragDrop />
      </div>
    </DndProvider>
  );
}
