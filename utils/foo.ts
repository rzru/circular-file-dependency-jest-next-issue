import { bob } from "./baz";

export const foo = () => {
    return 'bar';
};

export const bar = () => {
    return bob();
};