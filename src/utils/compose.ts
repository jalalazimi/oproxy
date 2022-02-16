export const compose = (arr: any[], obj: any) =>
  arr.reduce(
    (updatedValue: any, currentFunc: (arg0: any) => any) =>
      currentFunc(updatedValue),
    obj
  );
