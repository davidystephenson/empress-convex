/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as auth from "../auth.js";
import type * as createGame from "../createGame.js";
import type * as getGame from "../getGame.js";
import type * as getGames from "../getGames.js";
import type * as getHome from "../getHome.js";
import type * as getUserByName from "../getUserByName.js";
import type * as http from "../http.js";
import type * as joinGame from "../joinGame.js";
import type * as leaveGame from "../leaveGame.js";
import type * as startGame from "../startGame.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  auth: typeof auth;
  createGame: typeof createGame;
  getGame: typeof getGame;
  getGames: typeof getGames;
  getHome: typeof getHome;
  getUserByName: typeof getUserByName;
  http: typeof http;
  joinGame: typeof joinGame;
  leaveGame: typeof leaveGame;
  startGame: typeof startGame;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
