export const isChildren = (
  target?: Element | null,
  parent?: Element | null
) => {
  if (!parent || !target) return false;

  return parent.contains(target);
};

export const isElQuery = (el?: Element | null, query?: string) => {
  if (!el || !query) return false;

  return el.matches(query);
};
