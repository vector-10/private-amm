"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.witnesses = void 0;
exports.witnesses = {
    computeDivision: async (context, numerator, denominator, scale) => {
        if (denominator === 0n) {
            throw new Error('Division by zero');
        }
        const scaledNumerator = numerator * scale;
        const result = scaledNumerator / denominator;
        return result;
    }
};
