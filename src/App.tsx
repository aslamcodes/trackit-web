import { useEffect, useRef, useState } from "react";
import * as Paper from "paper";
import usePaper from "./hooks/useShape";

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { createRectangle } = usePaper(canvasRef);

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
      </main>
    </div>
  );
}

export default App;
