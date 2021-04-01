## Setup

1. Create the config files:

    ```bash
    $ cp wrangler.toml.example wrangler.toml
    $ cp project_config.ts.example project_config.ts
    ```

2. Install [Node JS](https://nodejs.org).
3. Install dependencies with `npm install --save-dev`.
4. Authenticate `wrangler`: `npx wrangler login`.
5. Get your account ID with `npx wrangler whoami`, then replace the account ID in `wrangler.toml` with it.
6. Fill in the values in `project_config.ts`. Values can be found on the [Discord Developer Portal](https://discord.com/developers/applications).
7. Run `npm run register` to register the available commands with Discord.
8. Run `npx wrangler publish` to publish!
