import { nothing } from '../../src/actions';

describe('nothing function', () => {

  it('is a function', () => {
    expect(typeof nothing).toBe('function');
  });

  it('builds a nothing action when no text is passed', () => {
    const expected = {
      WFWorkflowActionIdentifier: 'is.workflow.actions.nothing',
      WFWorkflowActionParameters: {},
    };
    const actual = nothing({});

    expect(actual).toEqual(expected);
  });

});
