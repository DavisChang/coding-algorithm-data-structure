class Rectangle {
  constructor(x1, y1, x2, y2) {
    this.x1 = x1; // Left edge
    this.y1 = y1; // Bottom edge
    this.x2 = x2; // Right edge
    this.y2 = y2; // Top edge
  }
}

class Event {
  constructor(x, rectangle, isLeft) {
    this.x = x;
    this.rectangle = rectangle;
    this.isLeft = isLeft;
  }
}

function doRectanglesIntersect(rect1, rect2) {
  // Ensure rectangles overlap and not just touch
  return (
    rect1.x1 < rect2.x2 &&
    rect1.x2 > rect2.x1 &&
    rect1.y1 < rect2.y2 &&
    rect1.y2 > rect2.y1
  );
}

function rectangleIntersectionSearch(rectangles) {
  const events = [];
  const activeRectangles = new Set();
  const intersections = [];

  // Generate events
  for (const rect of rectangles) {
    events.push(new Event(rect.x1, rect, true)); // Left edge event
    events.push(new Event(rect.x2, rect, false)); // Right edge event
  }

  // Sort events by x-coordinate, process left before right if same x
  events.sort((a, b) => a.x - b.x || b.isLeft - a.isLeft);

  // Sweep line
  for (const event of events) {
    const rect = event.rectangle;

    if (event.isLeft) {
      // Check for intersection with active rectangles
      for (const activeRect of activeRectangles) {
        if (doRectanglesIntersect(rect, activeRect)) {
          intersections.push([rect, activeRect]);
        }
      }
      activeRectangles.add(rect);
    } else {
      activeRectangles.delete(rect);
    }
  }

  return intersections;
}

module.exports = { Rectangle, rectangleIntersectionSearch };
