export interface Routes {
  [path: string]:
    | string
    | Routes
    | (() => string)
    | ((...args: any[]) => string);
}

export interface UrlBuilder {
  <R extends Routes>(path: string, routes: R): R & { toString(): string };
}

export const urlBuilder: UrlBuilder = (base, routes) => {
  const mappedRoutes: Routes = {
    toString() {
      return base;
    },
  };

  Object.keys(routes).forEach((route) => {
    const url = routes[route];
    if (typeof url === "function" && route === "toString") {
      // Check if is method
      mappedRoutes.toString = function () {
        return base + routes.toString();
      };
    } else if (typeof url === "object") {
      mappedRoutes[route] = urlBuilder(base, url);
    } else if (typeof url === "string") {
      if (url === "") {
        mappedRoutes[route] = mappedRoutes.toString();
      } else {
        const path =
          url.indexOf("/") === 0
            ? url
            : [base, url].join("/").replace("//", "/");
        mappedRoutes[route] = path;
      }
    } else {
      throw new TypeError(
        `"${route}" is not valid. A routes object can only contain a string, an object or the "toString" method as values.`
      );
    }
  });

  return mappedRoutes as typeof routes;
};
