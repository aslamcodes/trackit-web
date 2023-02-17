import { useRef } from "react";
import usePaper from "./hooks/useShape";

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { createRectangle, createText } = usePaper(canvasRef);

  return (
    <div>
      <main>
        <canvas
          style={{
            width: "100%",
            height: "100%",
          }}
          ref={canvasRef}
        ></canvas>
        <button onClick={() => createRectangle({})}>Create a Rectangle</button>
        <button onClick={() => createText({})}>Create a Text</button>
      </main>
    </div>
  );
}

export default App;
