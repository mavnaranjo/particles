export function circlesCollide(el1, el2) {
    let dx = el2.position.x - el1.position.x,
        dy = el2.position.y - el1.position.y;

    return Math.hypot(dx, dy) < el1.size + el2.size;
}

export function circleGrowth(size1, size2) {
    let area1 = Math.PI * size1 ** 2,
        area2 = Math.PI * size2 ** 2;

    return Math.sqrt((area1 + area2) / Math.PI);
}