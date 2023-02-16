import { useEffect, useRef, useState } from "react";
import * as Paper from "paper";
import useShape from "./hooks/useShape";

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const scope = new Paper.PaperScope();
    const canvas = canvasRef.current as HTMLCanvasElement;
    scope.setup(canvas);
    return () => {
      const scope = paper.PaperScope.get(canvas);
    };
  }, []);

  const { createRectangle } = useShape(canvasRef);

  // const draw = () => {
  //   let myPath = new Paper.Path();

  //   Paper.view.onMouseDown = (event: any) => {
  //     myPath.strokeColor = new Paper.Color(0, 0, 0);
  //     myPath.strokeWidth = 3;
  //   };

  //   Paper.view.onMouseDrag = (event: any) => {
  //     myPath.add(event.point);
  //   };

  //   // Paper.view.draw();
  // };

  function handleButtonClick() {
    // Get the Paper.js scope from the canvas element
    const scope = new Paper.PaperScope();

    const canvas = canvasRef.current as HTMLCanvasElement;
    scope.setup(canvas);

    // Create a rectangle path
    const rectangle = new scope.Path.Rectangle(
      new scope.Point(50, 50),
      new scope.Size(100, 100)
    );

    rectangle.fillColor = new Paper.Color(0, 0, 0);

    scope.project.activeLayer.addChild(rectangle);

    scope.view.update();
  }

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
