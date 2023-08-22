import calculate from '../../logic/calculate';

describe('calculate', () => {
  it("should reset the calculator when 'AC' is pressed", () => {
    const result = calculate({ total: '5', next: '5', operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it("should return the total when '=' is pressed", () => {
    const result = calculate({ total: '5', next: '5', operation: '+' }, '=');
    expect(result).toEqual({ total: '10', next: null, operation: null });
  });
});
