interface ExpCalculatorState {
  current_level: number;
  current_exp: number;
  current_max_exp: number;
  target_level: number;
  target_exp: number;
  target_max_exp: number;
}

type ExpCalculatorField = "current" | "target";

type ExpCalculatorAction =
  | {
      type: "SET_LEVEL";
      payload: { field: ExpCalculatorField; level: number };
    }
  | {
      type: "SET_EXP";
      payload: { field: ExpCalculatorField; exp: number };
    };

export const ExpCalculatorReducer = (
  state: ExpCalculatorState,
  action: ExpCalculatorAction,
) => {
  switch (action.type) {
    case "SET_LEVEL":
      const _level = Math.min(Math.max(action.payload.level, 1), 125);
      return {
        ...state,
        [`${action.payload.field}_level`]: _level,
      };
    case "SET_EXP":
      const _exp = Math.min(Math.max(action.payload.exp, 0), 3000000);
      return {
        ...state,
        [`${action.payload.field}_exp`]: _exp,
      };

    default:
      return state;
  }
};
