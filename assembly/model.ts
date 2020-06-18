// FIXME: Remove
@nearBindgen
export class TextMessage {
    text: string;
}

enum Cell { S = 0b00, X = 0b01, O = 0b10 };

function setCell(field: u32, cell: Cell, x: u8, y: u8): u32 {
    return (field << (x + y*3)) | cell;
}

function getCell(field: u32, x: u8, y: u8): u32 {
    return (field << (x + y*3)) & 0b11;
}

function _row(x: Cell, y: Cell, z: Cell): bool {
    return x != Cell.S && x == y && x == z;
}

function won(field: u32): bool {
    if(_row(getCell(field, 0, 0), getCell(field, 1, 1), getCell(field, 2, 2)) ||
       _row(getCell(field, 2, 0), getCell(field, 1, 1), getCell(field, 0, 2))
    )
        return true;
    for(let i: u8 = 0; i < 3; ++i) {
        if(_row(getCell(field, 0, i), getCell(field, 1, i), getCell(field, 2, i)) ||
           _row(getCell(field, i, 0), getCell(field, i, 1), getCell(field, i, 2))
        )
            return true;
    }
    return false;
}