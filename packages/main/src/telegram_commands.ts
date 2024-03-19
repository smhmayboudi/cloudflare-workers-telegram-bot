import { TelegramCommand } from "./types";

export default class TelegramCommands {
	static ping: TelegramCommand = async (bot, update, args) =>
		bot.ping(update, args);
	static toss: TelegramCommand = async (bot, update) => bot.toss(update);
	static epoch: TelegramCommand = async (bot, update) => bot.epoch(update);
	static kanye: TelegramCommand = async (bot, update) => bot.kanye(update);
	static bored: TelegramCommand = async (bot, update) => bot.bored(update);
	static joke: TelegramCommand = async (bot, update) => bot.joke(update);
	static dog: TelegramCommand = async (bot, update) => bot.dog(update);
	static roll: TelegramCommand = async (bot, update, args) =>
		bot.roll(update, args);
	static duckduckgo: TelegramCommand = async (bot, update, args) =>
		bot.duckduckgo(update, args);
	static question: TelegramCommand = async (bot, update, args) =>
		bot.question(update, args);
	static sean: TelegramCommand = async (bot, update, args) =>
		bot.sean(update, args);
	static clear: TelegramCommand = async (bot, update) => bot.clear(update);
	static code: TelegramCommand = async (bot, update) => bot.code(update);
	static commandList: TelegramCommand = async (bot, update) =>
		bot.commandList(update);
	static image: TelegramCommand = async (bot, update, args) =>
		bot.image(update, args);
	static translate: TelegramCommand = async (bot, update, args) =>
		bot.translate(update, args);

	static decor: TelegramCommand = async (bot, update, args) =>
		bot.decor(update, args);
}
