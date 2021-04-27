// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    const headquarters = 42;
    if (block >= 42) {
        return block - headquarters;
    } else {
        return headquarters - block;
    };
};

function distanceFromHqInFeet(block) {
    let measure = distanceFromHqInBlocks(block);
    return measure * 264;
};

function distanceTravelledInFeet(start, end) {
    return Math.abs((start - end) * 264);
};

function calculatesFarePrice(start, end) {
    let distance = distanceTravelledInFeet(start, end);
    let price
    if (distance <= 400) {
        price = 0;
        return price;
    } else if (distance >= 400 && distance <= 2000) {
        price = (distance - 400) * .02;
        return price;
    } else if (distance >= 2000 && distance < 2500) {
        price = 25;
        return price;
    } else if (distance > 2500) {
        return `cannot travel that far`;
    }
};
