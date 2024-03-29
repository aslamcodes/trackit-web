import { RefObject, useEffect, useLayoutEffect } from "react";
import * as Paper from "paper";

interface BaseShapeFactorConfig {
  color?: paper.Color;
  initialPosition?: paper.Point;
}

interface RectangleFactoryConfig extends BaseShapeFactorConfig {}

export default function useShape(ref: RefObject<HTMLCanvasElement>) {
  let scope = new Paper.PaperScope();

  useEffect(() => {
    const canvas = ref.current as HTMLCanvasElement;
    scope.setup(canvas);
  }, []);

  const createCircle = (config: any) => {};

  const createText = (config: any) => {
    const text = new Paper.PointText({
      point: new Paper.Point(100, 100),
      content: "Hello, world!",
      fillColor: "black",
      fontSize: 24,
      fontWeight: "bold",
    });

    text.onMouseDrag = (event: paper.MouseEvent) => {
      text.position = event.point;
    };

    scope.project.activeLayer.addChild(text);

    scope.view.update();
  };

  const createRectangle = (config: RectangleFactoryConfig) => {
    if (!scope) return;

    const rectangle = new scope.Path.Rectangle(
      new scope.Point(Math.random() * 100, Math.random() * 100),
      new scope.Size(200, 100)
    );

    rectangle.fillColor = new Paper.Color(0, 0, 0);

    rectangle.onMouseEnter = () => {
      rectangle.fillColor = new Paper.Color(100, 0, 0);
    };

    rectangle.onMouseLeave = () => {
      rectangle.fillColor = new Paper.Color(0, 0, 0);
    };

    rectangle.onMouseDrag = (event: paper.MouseEvent) => {
      rectangle.position = event.point;
    };

    scope.project.activeLayer.addChild(rectangle);

    scope.view.update();
  };

  return { createCircle, createRectangle, createText };
}
