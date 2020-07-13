import balanceReducer from "./balance";
import balanceReducer2 from "./balance";
import * as constants from "../actions/constants";

describe("balanceReducer", () => {
  describe("when initializing", () => {
    const balance = 10;

    it("sets a balance", () => {
      expect(
        balanceReducer(undefined, { type: constants.SET_BALANCE, balance })
      ).toEqual(balance);
    });

    describe("when re-initializing", () => {
      it("reads the balance from cookies", () => {
        expect(balanceReducer2(undefined, {})).toEqual(balance);
      });
    });
  });

  it("deposits into the balance", () => {
    const deposit = 20;
    const initialState = 5;
    expect(
      balanceReducer(initialState, { type: constants.DEPOSIT, deposit })
    ).toEqual(deposit + initialState);
  });

  it("withdraws from the balance", () => {
    const withdraw = 10;
    const initialState = 40;
    expect(
      balanceReducer(initialState, { type: constants.WITHDRAW, withdraw })
    ).toEqual(initialState - withdraw);
  });
});
