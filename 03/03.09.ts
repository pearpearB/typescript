type GetInnerType<Arr> = Arr extends ReadonlyArray<infer InnerArr>
  ? InnerArr
  : never;

const smapleInner1 = [1, 2, 3];
type SmapleInner1 = GetInnerType<typeof smapleInner1>;
//			^?

const smapleInner2 = [1, 2, [3, 4], [[5, 6]]];
type SmapleInner2 = GetInnerType<typeof smapleInner2>;
//			^?
