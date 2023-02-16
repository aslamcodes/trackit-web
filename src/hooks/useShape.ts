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

  const createRectangle = (config: RectangleFactoryConfig) => {
    if (!scope) return;

    const rectangle = new scope.Path.Rectangle(
      new scope.Point(Math.random() * 100, Math.random() * 100),
      new scope.Size(100, 100)
    );

    rectangle.fillColor = new Paper.Color(0, 0, 0);

    rectangle.onMouseDrag = (event: paper.MouseEvent) => {
      rectangle.position = new scope.Point(
        rectangle.position.x + event.delta.x,
        rectangle.position.y + event.delta.y
      );
    };

    scope.project.activeLayer.addChild(rectangle);

    scope.view.update();
  };

  return { createCircle, createRectangle };
}
