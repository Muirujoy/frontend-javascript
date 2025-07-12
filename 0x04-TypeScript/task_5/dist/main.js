"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumMinorCredits = exports.sumMajorCredits = void 0;
// Factory functions to create branded credit values
function createMajorCredits(credits) {
    return {
        credits,
        brand: { __brand: 'MajorCredits' }
    };
}
function createMinorCredits(credits) {
    return {
        credits,
        brand: { __brand: 'MinorCredits' }
    };
}
// Sum functions
function sumMajorCredits(subject1, subject2) {
    return createMajorCredits(subject1.credits + subject2.credits);
}
exports.sumMajorCredits = sumMajorCredits;
function sumMinorCredits(subject1, subject2) {
    return createMinorCredits(subject1.credits + subject2.credits);
}
exports.sumMinorCredits = sumMinorCredits;
// Test / Example usage (optional)
const major1 = createMajorCredits(3);
const major2 = createMajorCredits(4);
console.log('Sum of major credits:', sumMajorCredits(major1, major2).credits);
const minor1 = createMinorCredits(1);
const minor2 = createMinorCredits(2);
console.log('Sum of minor credits:', sumMinorCredits(minor1, minor2).credits);
