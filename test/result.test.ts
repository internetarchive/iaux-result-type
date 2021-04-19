import { expect } from '@open-wc/testing';
import { Result } from '../src/result';

describe('Result', () => {
  it('can be initialized with a success value', async () => {
    const result: Result<string, Error> = {
      success: 'foo',
    };
    expect(result.success).to.equal('foo');
    expect(result.error).to.equal(undefined);
  });

  it('can be initialized with an error', async () => {
    // eslint-disable-next-line no-shadow
    enum FooErrorType {
      networkError,
      decodingError,
    }
    class FooError extends Error {
      type?: FooErrorType;

      constructor(type: FooErrorType) {
        super();
        this.type = type;
      }
    }
    const result: Result<string, FooError> = {
      error: new FooError(FooErrorType.decodingError),
    };
    expect(result.success).to.equal(undefined);
    expect(result.error?.type).to.equal(FooErrorType.decodingError);
  });
});
