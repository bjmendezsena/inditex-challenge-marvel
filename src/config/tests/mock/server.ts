import { setupServer } from "msw/node";
import Config from "@/config";
import { handlers } from "./handlers";

export const server = setupServer(...handlers(Config.API_URL));
