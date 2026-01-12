"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.witnesses = void 0;
exports.witnesses = {
    computeDivision: async (context, numerator, denominator) => {
        if (denominator === 0n) {
            throw new Error('Division by zero');
        }
        const result = numerator / denominator;
        return result;
    }
};
