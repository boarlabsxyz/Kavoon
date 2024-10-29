export default function toKebabCase(str: string) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2') // Insert hyphen between lowercase and uppercase letters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/_+/g, '-') // Replace underscores with hyphens
    .toLowerCase(); // Convert everything to lowercase
}
