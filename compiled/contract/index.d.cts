import type * as __compactRuntime from '@midnight-ntwrk/compact-runtime';

export type Witnesses<T> = {
  computeDivision(context: __compactRuntime.WitnessContext<Ledger, T>,
                  numerator_0: bigint,
                  denominator_0: bigint,
                  scale_0: bigint): [T, bigint];
}

export type ImpureCircuits<T> = {
  addLiquidity(context: __compactRuntime.CircuitContext<T>,
               amountA_0: bigint,
               amountB_0: bigint): __compactRuntime.CircuitResults<T, bigint>;
  swapAForB(context: __compactRuntime.CircuitContext<T>, amountIn_0: bigint): __compactRuntime.CircuitResults<T, bigint>;
  swapBForA(context: __compactRuntime.CircuitContext<T>, amountIn_0: bigint): __compactRuntime.CircuitResults<T, bigint>;
  getReserveA(context: __compactRuntime.CircuitContext<T>): __compactRuntime.CircuitResults<T, bigint>;
  getReserveB(context: __compactRuntime.CircuitContext<T>): __compactRuntime.CircuitResults<T, bigint>;
}

export type PureCircuits = {
}

export type Circuits<T> = {
  addLiquidity(context: __compactRuntime.CircuitContext<T>,
               amountA_0: bigint,
               amountB_0: bigint): __compactRuntime.CircuitResults<T, bigint>;
  swapAForB(context: __compactRuntime.CircuitContext<T>, amountIn_0: bigint): __compactRuntime.CircuitResults<T, bigint>;
  swapBForA(context: __compactRuntime.CircuitContext<T>, amountIn_0: bigint): __compactRuntime.CircuitResults<T, bigint>;
  getReserveA(context: __compactRuntime.CircuitContext<T>): __compactRuntime.CircuitResults<T, bigint>;
  getReserveB(context: __compactRuntime.CircuitContext<T>): __compactRuntime.CircuitResults<T, bigint>;
}

export type Ledger = {
  readonly reserveA: bigint;
  readonly reserveB: bigint;
  readonly totalLiquidity: bigint;
}

export type ContractReferenceLocations = any;

export declare const contractReferenceLocations : ContractReferenceLocations;

export declare class Contract<T, W extends Witnesses<T> = Witnesses<T>> {
  witnesses: W;
  circuits: Circuits<T>;
  impureCircuits: ImpureCircuits<T>;
  constructor(witnesses: W);
  initialState(context: __compactRuntime.ConstructorContext<T>): __compactRuntime.ConstructorResult<T>;
}

export declare function ledger(state: __compactRuntime.StateValue): Ledger;
export declare const pureCircuits: PureCircuits;
