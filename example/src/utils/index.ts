export const getKeyByToken = (token: string, object: Object): string | number => {
  token = `styleGuide.${token}`;

  return token.split(".").reduce((a, b) => a[b], object);
};
