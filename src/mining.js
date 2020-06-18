import { setOptimizeLevelHints } from "assemblyscript";

const S = 0b00, X = 0b01, O = 0b10;

export function setCell(field, x, y, cell) {
    return field | (cell << (x + y*3)*2);
}

export function getCell(field, x, y) {
    return (field >> (x + y*3)*2) & 0b11;
}

function _row(x, y, z) {
    return x != Cell.S && x == y && x == z;
}

// export function won(field) {
//     if(_row(getCell(field, 0, 0), getCell(field, 1, 1), getCell(field, 2, 2)) ||
//        _row(getCell(field, 2, 0), getCell(field, 1, 1), getCell(field, 0, 2))
//     )
//         return true;
//     for(let i = 0; i < 3; ++i) {
//         if(_row(getCell(field, 0, i), getCell(field, 1, i), getCell(field, 2, i)) ||
//            _row(getCell(field, i, 0), getCell(field, i, 1), getCell(field, i, 2))
//         )
//             return true;
//     }
//     return false;
// }

function _rowSuits(field, x0, y0, x1, y1, x2, y2) {
    const suits = (getCell(field, x0, y0) == X || getCell(field, x0, y0) == S) &&
                  (getCell(field, x1, y1) == X || getCell(field, x1, y1) == S) &&
                  (getCell(field, x2, y2) == X || getCell(field, x2, y2) == S);
    if(!suits) return null;
    setCell(field, x0, y0, X);
    setCell(field, x1, y1, X);
    setCell(field, x2, y2, X);
    return field;
}

export function _solveStage1(field) {
    if(_rowSuits(field, 0,0, 1,1, 2,2) || _rowSuits(field, 2,0, 1,1, 0,2))
        return field;
    for(let i = 0; i < 3; ++i) {
        if(_rowSuits(field, 0, i, 1, i, 2, i) || _rowSuits(field, i, 0, i, 1, i, 2))
            return field;
    }
    return null;
}

export function solve(field) {
    if(!_solveStage1(field)) return null;

    let Xs = 0;
    let Os = 0;
    for(let i = 0; i < 9; ++i) {
      if((field & 0b11) == Cell.X) ++Xs;
      if((field & 0b11) == Cell.O) ++Os;
    }

    // Add Os to make Xs == Os + 1
    while(Xs != Os + 1) {
        for(let x = 0; x < 3; ++x) {
            for(let y = 0; y < 3; ++y) {
                if(getCell(field, x, y) == S)
                    setCell(field, x, y, O);
            }
        }
    }

    return field;
}

export async function mine(contract) {
    const index = await contract.createChallenge();
    let field = await contract.getChallenge();
    field = solve(field);
    if(field) {
        const result = await contract.mine({ index: index, field: field});
        if(!result)
            console.log("Something went wrong in mining.")
    }
    return field !== null;
}
