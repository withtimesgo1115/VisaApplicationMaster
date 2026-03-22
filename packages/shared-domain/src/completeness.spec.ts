import { evaluateCompleteness } from './completeness';

describe('evaluateCompleteness', () => {
  it('returns missing items with reasons', () => {
    const result = evaluateCompleteness(
      ['passport', 'photo', 'bank_statement'],
      ['passport']
    );

    expect(result.isComplete).toBe(false);
    expect(result.missing).toEqual([
      { code: 'photo', reason: 'required_by_rule' },
      { code: 'bank_statement', reason: 'required_by_rule' }
    ]);
  });

  it('returns complete when every required document is uploaded', () => {
    const result = evaluateCompleteness(['passport', 'photo'], ['photo', 'passport']);

    expect(result).toEqual({
      isComplete: true,
      missing: []
    });
  });
});
