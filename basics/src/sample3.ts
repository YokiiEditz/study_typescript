const name: string = 'rocky';

// type Color = "red" | "blue" | "green";

type Small = {
  name: string;
  age: 50 | 78;
};

type Large = Small & {
  role: string;
};

const person: Large = {
  name: "yoki",
  age: 50,
  role: "soft dev",
};

console.log(person.name);

import { useState } from "react";
type ButtonProps = React.ComponentPropsWithoutRef<"button">;

// type ButtonProps = {
// setCount: React.Dispatch<React.SetStateAction<number>>;
// autoFocus?: boolean;
//   clicked: (e: React.MouseEvent<HTMLButtonElement>) => number;
//   children: React.ReactNode;
//   borderRadius: Record<string, number>;
//   style: React.CSSProperties;
//   bgColor: Color;
//   fontSize: string;
//   shape?: boolean;
//   padding: [number, number, number];
// };

type UserData = {
  name: string;
  age: number;
};

// type User = {
//   sid: string;
//   name: string;
// };

// type Guest = Omit<User, "name">;

const buttonTextOptions = [
  "click",
  "click again!",
  "click again one more time",
] as const;

const Button = ({ autoFocus }: ButtonProps) => {
  //   console.log(bgColor, fontSize, shape, padding);

  // const [state, setCount] = useState(0);
  // const [text, setText] = useState("text");
  const [user] = useState<UserData | null>(null);

  const getName = user?.name;
  console.log(getName);

  return (
    <button autoFocus={autoFocus}>
      {buttonTextOptions.map((option) => {
        return option;
      })}
    </button>
    // <button onClick={() => setCount((count) => count + 1)}> click me</button>
  );
};

export default Button;

// const Button = (props: { bgColor: string; fontSize: string }) => {
//   console.log(props.bgColor);

//   return <button>click me</button>;
// };

// export default Button;



  // type tupples = [x: number, y: number, z: number];

  // const data: tupples = [10, 20, 30];

  // function addItsvalues(x: tupples, y: tupples) {
  //   return [x[0] + y[0], x[1] + y[1], x[2] + y[2]];
  // }

  // console.log(addItsvalues(data, data));

  function simpleStrings(intial: string): [() => string, (v: string) => void] {
    let str: string = intial;

    return [
      () => str,
      (v: string) => {
        str = v;
      },
    ];
  }

  const [one, two] = simpleStrings("hello");
  console.log(one());
  two("bye");
  console.log(one());

  function simpleStr<T>(intial: T): [() => T, (v: T) => void] {
    let str: T = intial;

    return [
      () => str,
      (v: T) => {
        str = v;
      },
    ];
  }

  const getStr = <T,>(x: T) => {
    return x;
  };
  getStr<number>(45);

  // const [st1get, st1set] = simpleStr<string>("45");
  const [st1get, st1set] = simpleStr<string | null>(null);

  console.log(st1get());
  st1set("null");
  console.log(st1get());

  interface Rank<RankItem> {
    item: RankItem;
    rank: number;
  }

  function ranker<RankItem>(
    items: RankItem[],
    rank: (v: RankItem) => number
  ): RankItem[] {
    const ranks: Rank<RankItem>[] = items.map((item) => ({
      item,
      rank: rank(item),
    }));

    console.log("rank function:", rank);

    ranks.sort((a, b) => b.rank - a.rank);

    return ranks.map((rank) => rank.item);
  }

  interface Pokemon {
    name: string;
    hp: number;
  }

  const pokemon: Pokemon[] = [
    {
      name: "Bulbasaur",
      hp: 20,
    },
    {
      name: "Megaasaur",
      hp: 5,
    },
  ];

  const ranks = ranker(pokemon, ({ hp }) => hp);
  console.log(ranks);

const convertArray = <T,>(value: T): T[] => {
  return [value];
};

function convertToArray<T>(value: T): T[] {
  return [value];
}

console.log(convertArray(5));
console.log(convertArray("hello"));
console.log(convertToArray(5));
console.log(convertToArray("hello"));

// type Samples = {
//   countValue: number;
//   countHistory: number[];
// };

// type Samples<T> = {
//   countValue: T;
//   countHistory: T[];
// };

// const Sample = <T,>({ countValue, countHistory }: Samples<T>)=>{}



  // interface User {
  //   name: string;
  //   age?: number;
  // }
  // const carDetails: Record<string, User> = {
  //   "count -1": {
  //     name: "jake",
  //   },
  //   two2: {
  //     age: 45,
  //     name: "king",
  //   },
  // };
  // console.log(carDetails);

  // interface Cat {
  //   readonly name: string;
  //   breed: string;
  // }

  // function CatsFun(name: string, breed: string): Readonly<Cat> {
  //   return {
  //     name,
  //     breed,
  //   };
  // }
  // const res = CatsFun("white", "tobe");
  // res.breed = " blacky";

  // const arr = [10, 20, 30] as const;
  // arr[0] = 50;
  // console.log("arrr", arr);

  // type UserDatas = {
  //   name: string;
  //   age: number;
  //   email?: string;
  //   phone: number;
  // };

  // type Partials = Partial<UserDatas>;
  // type Requires = Required<UserDatas>;
  // type Picks = Pick<UserDatas, "name" | "age">;
  // type Omits = Omit<UserDatas, "phone">;

  type UserDetail = {
    id: string;
    name: string;
  };

  const mapID = (
    users: UserDetail[]
  ): Record<string, Omit<UserDetail, "id">> => {
    return users.reduce((a, v) => {
      const { id, ...other } = v;
      return { ...a, [id]: other };
    }, {});
  };

  console.log(
    mapID([
      { id: "fooo", name: "mr foos" },
      { id: "booo", name: "mr boos" },
    ])
  );

  function myForEach<T>(items: T[], foreach: (v: T) => void): void {
    items.reduce((_, v) => {
      foreach(v);
      return undefined;
    }, undefined);
  }

  myForEach(["asdf", "dfdf", "fgfg"], (v) => console.log(`hai-${v}`));

  function myFuns<T>(items: T[], filters: (v: T) => boolean): T[] {
    return items.reduce((a, v) => (filters(v) ? [...a, v] : a), [] as T[]);
  }

  console.log(myFuns([1, 2, 3, 4, 5, 6, 7, 8], (v) => v % 2 === 0));

  function myMap<T, K>(items: T[], mapFun: (v: T) => K): K[] {
    return items.reduce((a, v) => [...a, mapFun(v)], [] as K[]);
  }

  console.log(myMap([1, 2, 3, 4, 5, 6, 7, 8], (v) => (v * 2).toString()));

  function pluck<DataType, KeyType extends keyof DataType>(
    items: DataType[],
    key: KeyType
  ): DataType[KeyType][] {
    return items.map((item) => item[key]);
  }

  const dogs = [
    { name: "abby", age: 12 },
    { name: "gabi", age: 10 },
  ];

  console.log(pluck(dogs, "name"));
  console.log(pluck(dogs, "age"));

  interface BaseEvent {
    time: number;
    user: string;
  }
  interface EventMap {
    addCart: BaseEvent & { quants: number; prodID: string };
    checkout: BaseEvent;
  }

  function sendEvent<Name extends keyof EventMap>(
    name: Name,
    data: EventMap[Name]
  ): void {
    console.log([name, data]);
  }

  sendEvent("addCart", { prodID: "foo", user: "yoki", quants: 2, time: 10 });
  sendEvent("checkout", { time: 20, user: "rob" });

  return <div>Challenge2</div>;


  interface Database<T, K> {
    get(id: K): T;
    set(id: K, value: T): void;
  }

  type DbketType = string | number | symbol;

  class MemoryDB<T, K extends DbketType> implements Database<T, K> {
    private db: Record<K, T> = {} as Record<K, T>;
    get(id: K): T {
      return this.db[id];
    }

    set(id: K, value: T): void {
      this.db[id] = value;
      console.log(this.db);
    }
  }

  const myDB = new MemoryDB<number, string>();
  myDB.set("foo", 45);
  // myDB.db["foo"] = "batts";
  console.log("--------------------", myDB.get("foo"));

  type DogInfo = {
    name: string;
    [key: string]: string | number;
  };

  const myDog: DogInfo = {
    name: " rocky",
    year: 2010,
  };

  console.log(myDog);

  interface DogInfos {
    name: string;
    age: number;
    year: number;
  }

  type NewTypes<Type> = {
    [property in keyof Type]: string;
  };

  type result = NewTypes<DogInfos>;

  const data: result = {
    name: "names",
    age: "55",
    year: "2012",
  };

  console.log("dataaaa", data);

  // interface Person {
  //   first: string;
  //   last: string;
  // }

  // function addFullName(name: Person): Person & {
  //   fullName: string;
  // } {
  //   return {
  //     ...name,
  //     fullName: `${name.last} ${name.first}`,
  //   };
  // }
