/** Tool for registering commands with Discord. */
import axios, { AxiosRequestConfig } from 'axios';
import { commands } from './commands';
import {
    DISCORD_API_URL,
    DISCORD_AUTH_HEADER,
    DISCORD_CLIENT_ID,
    DISCORD_GUILD_ID,
} from '../project_config';

/** Make a request to the Discord application endpoint.
 *
 * Prepends /applications/ to endpoints, or, if the DISCORD_GUILD_ID
 * envvar is set, /applications/guilds/{guild.id}/.
 */
async function request(
    method: 'GET' | 'POST' | 'DELETE',
    endpoint: string,
    {
        data = null,
    }: {
        data?: Record<string, any> | null;
    } = {}
) {
    let fullEndpoint = `${DISCORD_API_URL}/applications/${DISCORD_CLIENT_ID}/`;
    if (DISCORD_GUILD_ID) {
        fullEndpoint += `guilds/${DISCORD_GUILD_ID}/`;
    }
    fullEndpoint += endpoint;
    const reqOptions: AxiosRequestConfig = {
        method: method,
        url: fullEndpoint,
        headers: {
            Authorization: DISCORD_AUTH_HEADER,
        },
        validateStatus: () => true,
    };
    if (data) {
        reqOptions.data = data;
    }
    let response = await axios(reqOptions);
    if (response.status === 429) {
        const seconds_wait = response.data.retry_after;
        console.log(`Ratelimited, retrying after ${seconds_wait} seconds.`);
        await new Promise(resolve => setTimeout(resolve, seconds_wait * 1000));
        response = await axios(reqOptions);
    }
    if (response.status >= 400) {
        console.error(response.data);
    }
    return response.data;
}

/** Deletes all existing commands. */
async function clearCommands() {
    const data = await request('GET', 'commands');
    for (const command of data) {
        await request('DELETE', `commands/${command.id}`);
    }
}

/** Creates a command. */
async function createCommand(command: Record<string, any>) {
    await request('POST', 'commands', { data: command });
    console.log('Registered', command.name);
}

/** Creates all commands, after first clearing commands. */
async function createAllCommands() {
    await clearCommands();
    for (const command of commands) {
        await createCommand(command);
    }
}

createAllCommands().then(() => {
    console.log('Done!');
});
