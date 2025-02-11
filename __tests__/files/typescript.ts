// @ts-nocheck
// @

import { type Plugin, mergeConfig, ServerOptions } from "vite";

import { type OpenAPIOptions, openAPIs } from ".";

/**
 * Good
 **/
const configureDevServer = (
  server: ServerOptions,
  customServer: ServerOptions
): ServerOptions => {
  return mergeConfig<ServerOptions, ServerOptions>(server, {
    open: true,
    strictPort: true,
    ...customServer,
  });
};

/**
 * @example
 *
 * {
 *   "development": (OpenAPIOptions & { proxy: ServerOptions.proxy })[],
 * }
 *
 */
export type Clients = {
  [mode: string]: (OpenAPIOptions & { proxy: ServerOptions["proxy"] })[];
};

/**
 *
 * @param clientsOptionsByMode clients 配置
 * @returns 返回 vite plugin 对象
 */
export default function openapi(clientsOptionsByMode: Clients): Plugin {
  let firstRun = true;
  let clients: OpenAPIOptions[];

  return {
    name: "openapi-generator",
    config: {
      order: "pre",
      async handler(config, env) {
        const mode = env.mode;
        clients = clientsOptionsByMode[mode] ?? [];
        const server = config.server ?? {};
        const proxies = clients.reduce(
          (acc, client) => ({ ...acc, ...client }),
          {}
        ) as NonNullable<ServerOptions["proxy"]>;

        return {
          ...config,
          server: configureDevServer({ proxy: proxies }, server),
        };
      },
    },
    async buildStart() {
      if (firstRun) {
        if (clients.length > 0) {
          firstRun = false;
          await openAPIs(clients);
        }
      }
    },
  };
}
