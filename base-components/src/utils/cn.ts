// Function to merge classNames
export function cn(
  ...args: (string | undefined | Record<string, boolean>)[]
): string {
  const results = args
    .filter((x) => x !== undefined)
    .map((x) => {
      if (typeof x === "object") {
        return Object.entries(x)
          .map(([key, value]) => {
            if (value) return key;
          })
          .join(" ");
      } else if (typeof x === "string") return x;
    });

  return results.join(" ");
}
