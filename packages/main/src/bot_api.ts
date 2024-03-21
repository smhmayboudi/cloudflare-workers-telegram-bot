import { Commands, Config, Update, Webhook } from "./types";

export default class BotApi {
  commands: Commands;
  webhook: Config["webhook"];
  update!: (update: Update) => Promise<Response>;

  constructor(config: Partial<Config>) {
    this.commands = config.commands as Commands;
    this.webhook = config.webhook as Webhook;
  }
}
