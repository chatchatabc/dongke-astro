import i18next from "i18next";

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

export function utilAddLocalePathname(params: { pathname: string }) {
  const language = i18next.language;
  const { pathname } = params;

  if (language === "en") {
    return pathname;
  }
  return `/${language}${pathname}`;
}
