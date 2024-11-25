class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function convexHull(points) {
  if (points.length < 3) return points;

  // Encuentra el punto con la coordenada y más baja (y si hay empate, el x más bajo)
  let start = points[0];
  for (let i = 1; i < points.length; i++) {
    if (
      points[i].y < start.y ||
      (points[i].y === start.y && points[i].x < start.x)
    ) {
      start = points[i];
    }
  }

  // Ordena los puntos por el ángulo polar con respecto al punto de inicio
  points.sort((a, b) => {
    const orientation =
      (b.y - start.y) * (a.x - start.x) - (a.y - start.y) * (b.x - start.x);
    if (orientation === 0) {
      return (
        (start.x - a.x) ** 2 +
        (start.y - a.y) ** 2 -
        ((start.x - b.x) ** 2 + (start.y - b.y) ** 2)
      );
    }
    return orientation;
  });

  const hull = [points[0], points[1]];

  for (let i = 2; i < points.length; i++) {
    let top = hull.pop();
    while (
      hull.length &&
      (points[i].y - hull[hull.length - 1].y) *
        (top.x - hull[hull.length - 1].x) -
        (points[i].x - hull[hull.length - 1].x) *
          (top.y - hull[hull.length - 1].y) <=
        0
    ) {
      top = hull.pop();
    }
    hull.push(top);
    hull.push(points[i]);
  }

  return hull;
}

// Ejemplo de uso
const points = [
  new Point(0, 3),
  new Point(2, 2),
  new Point(1, 1),
  new Point(2, 1),
  new Point(3, 0),
  new Point(0, 0),
  new Point(3, 3),
];

const hull = convexHull(points);
console.log("Puntos en el Convex Hull:");
hull.forEach((point) => console.log(`(${point.x}, ${point.y})`));
