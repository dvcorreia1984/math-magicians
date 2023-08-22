import operate from '../../logic/operate';

describe('operate', () => {
  it('should correctly add', () => {
    const result = operate('1', '1', '+');
    expect(result).toEqual('2');
  });

  it('should correctly minus', () => {
    const result = operate('10', '4', '-');
    expect(result).toEqual('6');
  });

  it('should correctly multiply', () => {
    const result = operate('8', '4', 'x');
    expect(result).toEqual('32');
  });

  it('should correctly do division', () => {
    const result = operate('8', '4', '÷');
    expect(result).toEqual('2');
  });

  it('should correctly do modulus operations', () => {
    const result = operate('8', '4', '%');
    expect(result).toEqual('0');
  });

  it('should return an error message when dividing by 0', () => {
    const result = operate('8', '0', '÷');
    expect(result).toEqual("Can't divide by 0.");
  });

  it('should return an error message when doing modulus operations with 0', () => {
    const result = operate('8', '0', '%');
    expect(result).toEqual("Can't find modulo as can't divide by 0.");
  });

  it('should return an error message when given an unknown operation', () => {
    expect(() => operate('8', '0', 'unknown')).toThrow("Unknown operation 'unknown'");
  });
});
