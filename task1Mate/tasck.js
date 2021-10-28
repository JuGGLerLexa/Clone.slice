
function addPoints(points, homeTeam, awayTeam, result) {
    // put your code here
    let copyPoint = points.slice();
    if (result === 'win') {
        result[homeTeam - 1] += 3;
    } else if (result === 'lose') {
        copyPoint[awayTeam - 1] += 3;
    } else {
        copyPoint [homeTeam - 1] += 1;
        copyPoint [homeTeam - 1] += 1;
    }
    return copyPoint;
}

// examples
addPoints([8, 6, 4, 1], 1, 2, 'win'); // returns ==> [11, 6, 4, 1]
addPoints([18, 15, 8, 2, 1, 0], 1, 4, 'lose'); // returns ==> [18, 15, 8, 5, 1, 0]
addPoints([18, 15, 8, 2, 1, 0], 5, 6, 'draw'); // returns ==> [18, 15, 8, 2, 2, 1]
