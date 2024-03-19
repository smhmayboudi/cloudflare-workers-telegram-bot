import BotApi from "./bot_api";
import Handler from "./handler";
import TelegramBot from "./telegram_bot";
import Webhook from "./webhook";
import { Chat as TelegramChat, Message as TelegramMessage, Update as TelegramUpdate } from "@telegraf/types"

export { TelegramChat, TelegramMessage, TelegramUpdate, Webhook };

export type TelegramChatPublic = Exclude<TelegramChat, TelegramChat.PrivateChat>

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

export type Balance = Record<
	string,
	{ final_balance: number; n_tx: number; total_received: number }
>;

export type TelegramFrom = {
	first_name: string;
	id: number;
	is_bot: boolean;
	language_code: string;
	username: string;
};

export type TelegramUser = {
	id: number;
	is_bot: boolean;
	first_name: string;
	last_name?: string;
	username?: string;
	language_code?: string;
	can_join_groups?: boolean;
	can_read_all_group_messages?: boolean;
	supports_inline_queries: boolean;
};

export type TelegramMessageEntity = {
	type: string;
	offset: number;
	length: number;
	url?: string;
	user?: TelegramUser;
	language?: string;
};

export type TelegramPhotoSize = {
	file_id: string;
	file_unique_id: string;
	width: number;
	height: number;
	file_size?: number;
};

export type TelegramInputMessageContent = {
	message_text: string;
	parse_mode: string;
};

export type TelegramInlineQuery = {
	chat_type: "sender" | "private" | "group" | "supergroup" | "channel";
	from: TelegramFrom;
	id: number;
	offset: string;
	query: string;
};

export type PartialTelegramUpdate = {
	update_id?: number;
	message?: TelegramMessage;
	edited_message?: TelegramMessage;
	channel_post?: TelegramMessage;
	edited_channel_post?: TelegramMessage;
	inline_query?: TelegramInlineQuery;
};

export type TelegramInlineQueryType =
	| "article"
	| "photo"
	| "gif"
	| "mpeg4_gif"
	| "video"
	| "audio"
	| "voice"
	| "document"
	| "location"
	| "venue"
	| "contact"
	| "game"
	| "sticker";

export class TelegramInlineQueryResult {
	type: TelegramInlineQueryType;
	id: string;
	constructor(type: TelegramInlineQueryType) {
		this.type = type;
		this.id = crypto.randomUUID();
	}
}

export class TelegramInlineQueryResultPhoto extends TelegramInlineQueryResult {
	photo_url: string; // must be a jpg
	thumb_url: string;
	photo_width?: number;
	photo_height?: number;
	title?: string;
	description?: string;
	caption?: string;
	parse_mode?: string;
	caption_entities?: string;
	// reply_markup?: TelegramInlineKeyboardMarkup;
	// input_message_content?: TelegramInputMessageContent;
	constructor(photo: string) {
		super("photo");
		this.photo_url = photo;
		this.thumb_url = photo;
	}
}

export class TelegramInlineQueryResultArticle extends TelegramInlineQueryResult {
	title: string;
	input_message_content: TelegramInputMessageContent;
	thumb_url: string;
	constructor(
		content: string,
		title = content,
		parse_mode = "",
		thumb_url = ""
	) {
		super("article");
		this.title = title;
		this.input_message_content = {
			message_text: content.toString(),
			parse_mode,
		};
		this.thumb_url = thumb_url;
	}
}

export type DDGQueryResponse = {
	AbstractSource: string;
	AbstractURL: string;
	Redirect: string;
	Image: string;
	RelatedTopics: { Icon: { URL: string } }[];
};
