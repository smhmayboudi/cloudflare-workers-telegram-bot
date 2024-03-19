# cf-workers-telegram-bot

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/smhmayboudi/cloudflare-workers-telegram-bot)

![screenshot of cf-workers-telegram-bot](/screenshot.png)

serverless telegram bot on cf workers

The original `worker.js` is the content of Nikhil John's
https://github.com/nikhiljohn10/telegram-bot-worker which is licensed with MIT.
My modifications are licensed under the Apache license.

The first bot configuration is fully featured, and responds to all received
messages with llama2 if a command isn't found.

To get continuous conversation with llama2 working make sure you add a database
to your wrangler.toml and initailize it with the schema.sql

To use the deploy button:

- Click the deploy button
- Navigate to your new **GitHub repository &gt; Settings &gt; Secrets** and add the following secrets:

  ```yaml
  - Name: CF_API_TOKEN (should be added automatically)
  - Name: CF_ACCOUNT_ID (should be added automatically)

  - Name: SECRET_TELEGRAM_API_TOKEN
  - Value: your-telegram-bot-token
  ```

- Push to `master` to trigger a deploy

To fork this repo and use wrangler:

- Click fork
- `npm i -g wrangler`
- `wrangler secret put SECRET_TELEGRAM_API_TOKEN` and set it to your telegram
  bot token
- `wrangler d1 create llama2`
- put the database block from the command in your wrangler.toml 50100bde-090c-4cb8-bcf6-e6b6176b6534
- `wrangler d1 execute llama2 --file ./schema.sql`
- `wrangler deploy`
- Done!

## Getting started with cf-workers-telegram-bot

Once you've deployed the bot you can get your Webhook command URL by doing any
of the following.

- sha256sum(YourTelegramSecretKey) is the path to your webhook commands and
  should be put at the end of your worker URL to access commands such as
  setting your webhook
- Use `echo -n 123 | shasum -a 256` to get the path
- Open the Cloudflare Worker Logs under **Workers &gt; cf-workers-telegram-bot
  &gt; Logs &gt; Begin log stream** and make a GET request (open it in your browser)
  to your Worker URL and look at the logs to see your Access URL
- Run `wrangler tail --format pretty` from inside your git repository and make
  a GET request to your Worker URL

Example URL for setting the Webhook and dropping pending updates:
`https://cf-workers-telegram-bot.smhmayboudi.workers.dev/123?command=set`
