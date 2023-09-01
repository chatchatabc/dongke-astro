export function utilFixPathname(pathname: string): string {
  return pathname[pathname.length - 1] === "/"
    ? pathname.slice(0, -1)
    : pathname;
}

export function utilSlugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
