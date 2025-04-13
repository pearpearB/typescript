// TODO 아직 잘 모르겠ㄷ ㅏ ..
type Data = { money: number };
type Methods = {
  add(amount: number): void;
  use(amount: number): void;
};
type MyObject = {
  data: Data;
  methods: Methods & ThisType<Data & Methods>;
};

const ObjError = {
  data: {
    money: 0,
  },
  methods: {
    add(amount: number) {
      this.money += amount; // error
    },
    use(amount: number) {
      this.money -= amount; // error
    },
  },
};

const Obj: MyObject = {
  data: {
    money: 0,
  },
  methods: {
    add(amount: number) {
      this.money += amount;
    },
    use(amount: number) {
      this.money -= amount;
    },
  },
};
