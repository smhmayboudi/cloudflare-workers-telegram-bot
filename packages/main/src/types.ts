import BotApi from "./bot_api";
import Handler from "./handler";
import TelegramBot from "./telegram_bot";
import Webhook from "./webhook";
import {
	Chat as TelegramChat,
	InlineQueryResult as TelegramInlineQueryResult,
	InlineQueryResultArticle as TelegramInlineQueryResultArticle,
	InlineQueryResultPhoto as TelegramInlineQueryResultPhoto,
	Message as TelegramMessage,
	Update as TelegramUpdate,
	ParseMode as TelegramParseMode
} from "@telegraf/types"

export { 
	TelegramChat,
	TelegramInlineQueryResult,
	TelegramInlineQueryResultArticle,
	TelegramInlineQueryResultPhoto,
	TelegramMessage,
	TelegramParseMode,
	TelegramUpdate,
	Webhook
};

export type TelegramPublicChat = Exclude<TelegramChat, TelegramChat.PrivateChat>

export type Update = TelegramMessage | TelegramUpdate

export type Command = (
	bot: BotApi,
	update: Update,
	args: string[]
) => Promise<Response>;

export type TelegramCommand = (
	bot: TelegramBot,
	update: TelegramUpdate,
	args: string[]
) => Promise<Response>;

export type Commands = Record<string, Command>;

export type Kv = Record<string, KVNamespace> | undefined;

export class Config {
	bot_name: string;
	api: typeof BotApi;
	webhook: Webhook;
	commands: Record<string, Command>;
	kv: Kv;
	url: URL;
	handler: Handler;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	ai: any;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	db: any;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	r2: any;

	constructor(config: Partial<Config> = {}) {
		this.bot_name = config.bot_name || "";
		this.api = config.api || BotApi;
		this.webhook = config.webhook || new Webhook(localhost, "", localhost);
		this.commands = config.commands || {};
		this.kv = config.kv;
		this.url = config.url || new URL(localhost);
		this.handler = config.handler || new Handler([]);
		this.ai = config.ai;
		this.db = config.db;
		this.r2 = config.r2;
	}
}

export const localhost = new URL("http://localhost");

export class WebhookCommands {
	[key: string]: () => Promise<Response>;
}

export type Joke = {
	error: boolean;
	category: string;
	type: string;
	setup?: string;
	delivery?: string;
	joke?: string;
	flags: {
		nsfw: boolean;
		religious: boolean;
		political: boolean;
		racist: boolean;
		sexist: boolean;
		explicit: boolean;
	};
	id: number;
	safe: boolean;
	lang: string;
};

export type Bored = {
	activity: string;
	type: string;
	participants: number;
	price: number;
	link: string;
	key: string;
	accessibility: 0;
};

export type DDGQueryResponse = {
	AbstractSource: string;
	AbstractURL: string;
	Redirect: string;
	Image: string;
	RelatedTopics: { Icon: { URL: string } }[];
};
