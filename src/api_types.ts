/** Types for the Discord API. */

export interface EmbedProvider {
    name?: string;
    url?: string;
}

export interface EmbedField {
    name: string;
    value: string;
    inline?: boolean;
}

export interface EmbedFooter {
    text: string;
    icon_url?: string;
}

export interface EmbedAuthor {
    name?: string;
    url?: string;
    icon_url?: string;
}

export interface EmbedMedia {
    url?: string;
}

export interface Embed {
    title?: string;
    description?: string;
    url?: string;
    color?: number;
    provider?: EmbedProvider;
    fields?: Array<EmbedField>;
    footer?: EmbedFooter;
    timestamp?: string;
    author?: EmbedAuthor;
    image?: EmbedMedia;
    thumbnail?: EmbedMedia;
    video?: EmbedMedia;
}

export const enum AllowedMentionsType {
    ROLES = 'roles',
    USERS = 'users',
    EVERYONE = 'everyone',
}

export interface AllowedMentions {
    parse?: Array<AllowedMentionsType>;
    roles?: Array<string>;
    users?: Array<string>;
    replied_user?: boolean;
}

export interface CommandResponse {
    tts?: boolean;
    content?: string;
    embeds?: Array<Embed>;
    allowed_mentions?: AllowedMentions;
    flags?: number;
}

export const enum InteractionResponseType {
    PONG = 1,
    CHANNEL_MESSAGE_WITH_SOURCE = 4,
    // Currently not supporting type 5.
}

export interface InteractionResponse {
    type: InteractionResponseType;
    data?: CommandResponse;
}

export const enum PremiumType {
    NONE = 0,
    NITRO_CLASSIC = 1,
    NITRO = 2,
}

export interface User {
    id: string;
    username: string;
    discriminator: string;
    avatar: string | null;
    bot?: boolean;
    system?: boolean;
    mfa_enabled?: boolean;
    locale?: string;
    flags?: number;
    premium_type?: PremiumType;
    public_flags?: number;
}

export interface Member {
    user: User;
    nick: string | null;
    roles: Array<string>;
    joined_at: string;
    premium_since: string | null;
    deaf: boolean;
    mute: boolean;
    permissions: string;
}

export const enum InteractionType {
    PING = 1,
    SLASH_COMMAND = 2,
}

export interface SlashCommandInteractionDataArgumentOption {
    name: string;
    value: string | number | boolean;
}

export interface SlashCommandInteractionDataCommandOption {
    name: string;
    options?: Array<SlashCommandInteractionDataOption>;
}

export type SlashCommandInteractionDataOption =
    | SlashCommandInteractionDataArgumentOption
    | SlashCommandInteractionDataCommandOption;

export interface SlashCommandInteractionData {
    id: string;
    name: string;
    options?: Array<SlashCommandInteractionDataOption>;
}

export interface BaseInteractionData {
    id: string;
    type: InteractionType;
    data?: Record<string, any>;
    channel_id?: string;
    token: string;
    version: 1;
}

export interface PingInteractionData extends BaseInteractionData {
    type: InteractionType.PING;
}

export interface BaseSlashCommandData extends BaseInteractionData {
    type: InteractionType.SLASH_COMMAND;
    data: SlashCommandInteractionData;
}

export interface GuildSlashCommandData extends BaseSlashCommandData {
    guild_id: string;
    member: Member;
}

export interface DmSlashCommandData extends BaseSlashCommandData {
    user: User;
}

export type SlashCommandData = GuildSlashCommandData | DmSlashCommandData;
export type InteractionData = PingInteractionData | SlashCommandData;
