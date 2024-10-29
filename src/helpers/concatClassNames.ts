export default function concatClassNames(...names): string {
  return names.reduce(
    (acc, name) => (!name || name === '' ? acc : `${acc} ${name}`),
    ''
  );
}
