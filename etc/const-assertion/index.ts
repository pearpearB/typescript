const CONST = '__SAMPLE__';

const test1 = {
  sample: CONST,
};
type TEST_1 = typeof test1;
//			^?

const CONST_OBJ = {
  CONST: '__SAMPLE__',
} as const;

const test2 = {
  sample: CONST_OBJ.CONST,
};
type TEST_2 = typeof test2;
//			^?
