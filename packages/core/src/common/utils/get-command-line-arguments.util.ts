export function getCommandLineArguments(argv: string[]) {
  const args = argv.splice(2);
  const result: any = {};
  args.forEach(keyAndValue => {
    const [ key, value ] = keyAndValue.split('=');

    if (typeof value === 'undefined') {
      result[key] = true;
      return;
    }

    try {
      result[key] = JSON.parse(value);
    } catch (error) {
      result[key] = value;
    }
  });
  return result;
}
