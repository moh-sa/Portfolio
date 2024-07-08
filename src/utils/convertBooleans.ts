export function convertBooleans<T>({ data }: { data: T }): T {
  const convertedData: Record<string, boolean> = {};
  for (const key in data) {
    if (
      typeof data[key] === "string" &&
      (data[key] === "true" || data[key] === "false")
    ) {
      convertedData[key as string] = data[key] === "true";
    }
  }

  return { ...data, ...convertedData };
}
