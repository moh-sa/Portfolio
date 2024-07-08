export function getCheckboxBooleanValue({
  formData,
  key,
}: {
  formData: FormData;
  key: string;
}): boolean {
  return formData.get(key) === "on";
}
