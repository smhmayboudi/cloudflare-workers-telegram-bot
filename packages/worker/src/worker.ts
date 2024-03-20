import {
  TelegramCommands,
  Handler,
  TelegramWebhook,
  TelegramBot,
} from "../../main/src/main";
import { Command } from "../../main/src/types";

interface Environment {
  SECRET_TELEGRAM_API_TOKEN: string;
  KV_GET_SET: KVNamespace;
  KV_UID_DATA: KVNamespace;

  SECRET_TELEGRAM_API_TOKEN2: string;

  SECRET_TELEGRAM_API_TOKEN3: string;

  SECRET_TELEGRAM_API_TOKEN4: string;

  SECRET_TELEGRAM_API_TOKEN5: string;

  AI: string;

  DB: D1Database;

  R2: R2Bucket;
}

export default {
  fetch: async (request: Request, env: Environment) =>
    new Handler([
      {
        bot_name: "@cf_tb_bot",
        api: TelegramBot,
        webhook: new TelegramWebhook(
          new URL(
            `https://api.telegram.org/bot${env.SECRET_TELEGRAM_API_TOKEN}`,
          ),
          env.SECRET_TELEGRAM_API_TOKEN,
          new URL(new URL(request.url).origin),
        ),
        commands: {
          default: TelegramCommands.question as Command,
          inline: TelegramCommands.question as Command,
          "/start": TelegramCommands.question as Command,
        },
        kv: { get_set: env.KV_GET_SET, uid_data: env.KV_UID_DATA },
        ai: env.AI,
        db: env.DB,
        // r2: env.R2,
      },
      // {
      // 	bot_name: "@TuxRobot",
      // 	api: TelegramBot,
      // 	webhook: new TelegramWebhook(
      // 		new URL(
      // 			`https://api.telegram.org/bot${env.SECRET_TELEGRAM_API_TOKEN}`
      // 		),
      // 		env.SECRET_TELEGRAM_API_TOKEN,
      // 		new URL(new URL(request.url).origin)
      // 	),
      // 	commands: {
      // 		default: TelegramCommands.question as Command,
      // 		inline: TelegramCommands.question as Command,
      // 		"/ping": TelegramCommands.ping as Command,
      // 		"/toss": TelegramCommands.toss as Command,
      // 		"/epoch": TelegramCommands.epoch as Command,
      // 		"/kanye": TelegramCommands.kanye as Command,
      // 		"/bored": TelegramCommands.bored as Command,
      // 		"/joke": TelegramCommands.joke as Command,
      // 		"/dog": TelegramCommands.dog as Command,
      // 		"/roll": TelegramCommands.roll as Command,
      // 		"/duckduckgo": TelegramCommands.duckduckgo as Command,
      // 		"/code": TelegramCommands.code as Command,
      // 		"/commands": TelegramCommands.commandList as Command,
      // 		"/question": TelegramCommands.question as Command,
      // 		"/clear": TelegramCommands.clear as Command,
      // 		"/help": TelegramCommands.commandList as Command,
      // 		"/image": TelegramCommands.image as Command,
      // 		"/start": TelegramCommands.question as Command,
      // 	},
      // 	kv: { get_set: env.KV_GET_SET, uid_data: env.KV_UID_DATA },
      // 	ai: env.AI,
      // 	db: env.DB,
      // 	r2: env.R2,
      // },
      // {
      // 	bot_name: "@duckduckbot",
      // 	api: TelegramBot,
      // 	webhook: new TelegramWebhook(
      // 		new URL(
      // 			`https://api.telegram.org/bot${env.SECRET_TELEGRAM_API_TOKEN2}`
      // 		),
      // 		env.SECRET_TELEGRAM_API_TOKEN2,
      // 		new URL(new URL(request.url).origin)
      // 	),
      // 	commands: {
      // 		default: TelegramCommands.duckduckgo as Command,
      // 		inline: TelegramCommands.duckduckgo as Command, // default inline response
      // 		"/duckduckgo": TelegramCommands.duckduckgo as Command,
      // 		"/question": TelegramCommands.question as Command,
      // 		"/code": TelegramCommands.code as Command,
      // 		"/commands": TelegramCommands.commandList as Command,
      // 		"/help": TelegramCommands.commandList as Command,
      // 		"/start": TelegramCommands.commandList as Command,
      // 	},
      // 	ai: env.AI,
      // 	db: env.DB,
      // },
      // {
      // 	bot_name: "@ddggbot",
      // 	api: TelegramBot,
      // 	webhook: new TelegramWebhook(
      // 		new URL(
      // 			`https://api.telegram.org/bot${env.SECRET_TELEGRAM_API_TOKEN3}`
      // 		),
      // 		env.SECRET_TELEGRAM_API_TOKEN3,
      // 		new URL(new URL(request.url).origin)
      // 	),
      // 	commands: {
      // 		default: TelegramCommands.duckduckgo as Command,
      // 		inline: TelegramCommands.duckduckgo as Command,
      // 		"/duckduckgo": TelegramCommands.duckduckgo as Command,
      // 		"/question": TelegramCommands.question as Command,
      // 		"/code": TelegramCommands.code as Command,
      // 		"/commands": TelegramCommands.commandList as Command,
      // 		"/help": TelegramCommands.commandList as Command,
      // 		"/start": TelegramCommands.commandList as Command,
      // 	},
      // 	ai: env.AI,
      // 	db: env.DB,
      // },
      // {
      // 	bot_name: "@SeanB_robot",
      // 	api: TelegramBot,
      // 	webhook: new TelegramWebhook(
      // 		new URL(
      // 			`https://api.telegram.org/bot${env.SECRET_TELEGRAM_API_TOKEN4}`
      // 		),
      // 		env.SECRET_TELEGRAM_API_TOKEN4,
      // 		new URL(new URL(request.url).origin)
      // 	),
      // 	commands: {
      // 		default: TelegramCommands.sean as Command,
      // 		"/clear": TelegramCommands.clear as Command,
      // 		"/start": TelegramCommands.commandList as Command,
      // 	},
      // 	ai: env.AI,
      // 	db: env.DB,
      // },
      // {
      // 	bot_name: "@TranslatePartyBot",
      // 	api: TelegramBot,
      // 	webhook: new TelegramWebhook(
      // 		new URL(
      // 			`https://api.telegram.org/bot${env.SECRET_TELEGRAM_API_TOKEN5}`
      // 		),
      // 		env.SECRET_TELEGRAM_API_TOKEN5,
      // 		new URL(new URL(request.url).origin)
      // 	),
      // 	commands: {
      // 		default: TelegramCommands.translate as Command,
      // 		inline: TelegramCommands.translate as Command,
      // 		"/start": TelegramCommands.commandList as Command,
      // 	},
      // 	ai: env.AI,
      // },
    ]).handle(request),
};
