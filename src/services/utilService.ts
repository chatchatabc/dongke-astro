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

export function utilAddLocalePathname(params: {
  pathname: string;
  locale?: string;
}) {
  const language = params.locale ?? i18next.language;
  const { pathname } = params;

  if (language === "en") {
    return pathname;
  }
  return `/${language}${pathname}`;
}

export function utilRemoveLocalePathname(params: { pathname: string }) {
  const language = i18next.language;
  const { pathname } = params;

  if (language === "en") {
    return pathname;
  }
  return pathname.replace(`/${language}`, "");
}

export function utilConvertSlugToCamelCase(params: { slug: string }): string {
  const { slug } = params;
  const words = slug.split("-");
  const camelCase = words
    .map((word, index) => {
      if (index === 0) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
  return camelCase;
}
