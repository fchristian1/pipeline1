import assert from 'assert';
import { add, div, mul, sub } from './calculator.js';

{
    const want = 3;
    const got = add(1, 2);
    assert.strictEqual(got, want);
}

{
    const want = 3;
    const got = sub(5, 2);
    assert.strictEqual(got, want);
}

{
    const want = 6;
    const got = mul(2, 3);
    assert.strictEqual(got, want);
}

{
    const want = 2;
    const got = div(6, 3);
    assert.strictEqual(got, want);
}