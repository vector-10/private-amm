export type Witnesses = {
  computeDivision: (
    context: any,
    numerator: bigint,
    denominator: bigint
  ) => Promise<bigint>;
};

export const witnesses: Witnesses = {
  computeDivision: async (
    context: any,
    numerator: bigint,
    denominator: bigint
  ): Promise<bigint> => {
    if (denominator === 0n) {
      throw new Error('Division by zero');
    }

    const result = numerator / denominator;

    return result;
  }
};