export const commands = [
    {
        name: 'lb',
        description: 'Display individual leaderboard',
        options: [
            {
                name: 'filters',
                type: 3,
                description: 'Filters to apply to the search',
                required: false,
            },
        ],
    },
    {
        name: 'lbteam',
        description: 'Display team leaderboard',
        options: [
            {
                name: 'all_time',
                type: 5,
                description: 'Show from all time',
                required: false,
            },
        ],
    },
    {
        name: 'lbsquad',
        description: 'Display squad leaderboard',
        options: [
            {
                name: 'filters',
                type: 3,
                description: 'Filters to apply to the search',
                required: true,
            },
        ],
    },
    {
        name: 'squad',
        description: 'Find squads or see details on a squad',
        options: [
            {
                name: 'player_1',
                type: 6,
                description: 'The first player',
                required: true,
            },
            {
                name: 'player_2',
                type: 6,
                description: 'The second player',
                required: false,
            },
            {
                name: 'player_3',
                type: 6,
                description: 'The third player',
                required: false,
            },
        ],
    },
    {
        name: 'player',
        description: 'See details on a player',
        options: [
            {
                name: 'user',
                type: 6,
                description: 'The player to see (defaults to yourself)',
                required: false,
            },
        ],
    },
    {
        name: 'team',
        description: 'See details on a team',
        options: [
            {
                name: 'team_name',
                type: 3,
                description: 'The team to see details on',
                required: true,
            },
        ],
    },
    {
        name: 'setname',
        description:
            'Sets a Polytopia account name and registers user with the bot',
        options: [
            {
                name: 'name',
                type: 3,
                description: 'Your Polytopia name',
                required: true,
            },
        ],
    },
    {
        name: 'getname',
        description: 'Get game ID of a player',
        options: [
            {
                name: 'user',
                type: 6,
                description: 'The player to see (defaults to yourself)',
                required: false,
            },
        ],
    },
    {
        name: 'getnames',
        description: 'Print all player names associated with a game ID',
        options: [
            {
                name: 'game',
                type: 4,
                description: 'The game to see players for',
                required: true,
            },
        ],
    },
    {
        name: 'settime',
        description: 'Set player time zone',
        options: [
            {
                name: 'timezone',
                type: 3,
                description: 'Your timezone, as a UTC offset',
                required: false,
            },
        ],
    },
    {
        name: 'game',
        description: 'See details on a specific game ID',
        options: [
            {
                name: 'game_id',
                type: 4,
                description: 'The ID of the game',
                required: true,
            },
        ],
    },
    {
        name: 'allgames',
        description: 'Search for games by participants or game name',
        options: [
            {
                name: 'search',
                type: 3,
                description: 'Participants/game name to search for',
                required: true,
            },
        ],
    },
    {
        name: 'incomplete',
        description: 'List incomplete games for you or other players',
        options: [
            {
                name: 'search',
                type: 3,
                description: 'Participants/game name to search for',
                required: true,
            },
        ],
    },
    {
        name: 'wins',
        description: 'List games that you or others have won',
        options: [
            {
                name: 'search',
                type: 3,
                description: 'Participants/game name to search for',
                required: true,
            },
        ],
    },
    {
        name: 'newgame',
        description: 'Adds an existing game to the bot for tracking',
        options: [
            {
                name: 'game_name',
                type: 3,
                description: 'The name of the game to add',
                required: true,
            },
            {
                name: 'players',
                type: 3,
                description: 'A list of players in the game',
                required: false,
            },
        ],
    },
    {
        name: 'win',
        description: 'Declare winner of an existing game',
        options: [
            {
                name: 'winning_game',
                type: 4,
                description: 'The ID of the game',
                required: true,
            },
            {
                name: 'winning_side_name',
                type: 3,
                description: 'The side that won',
                required: true,
            },
        ],
    },
    {
        name: 'unwin',
        description: 'Reset a completed game to incomplete',
        options: [
            {
                name: 'game',
                type: 4,
                description: 'The ID of the game to unwin',
                required: true,
            },
        ],
    },
    {
        name: 'delete',
        description: 'Deletes a game',
        options: [
            {
                name: 'game',
                type: 4,
                description: 'The ID of the game to delete',
                required: true,
            },
        ],
    },
    {
        name: 'rename',
        description: 'Renames an existing game (due to restarts)',
        options: [
            {
                name: 'game',
                type: 4,
                description: 'The ID of the game to rename',
                required: true,
            },
            {
                name: 'name',
                type: 3,
                description: 'The new name of the game',
                required: true,
            },
        ],
    },
    {
        name: 'settribe',
        description: 'Set tribe of players for a game',
        options: [
            {
                name: 'tribe',
                type: 3,
                description: "The tribe you're playing",
                required: true,
            },
        ],
    },
    {
        name: 'opengame',
        description: 'Opens a game that others can join',
        options: [
            {
                name: 'options',
                type: 3,
                description: 'Game opening options',
                required: true,
            },
        ],
    },
    {
        name: 'join',
        description: 'Join an open game',
        options: [
            {
                name: 'game',
                type: 4,
                description: 'The ID of the game to join',
                required: true,
            },
            {
                name: 'side',
                type: 4,
                description: 'The side of the game you want to join',
                required: false,
            },
        ],
    },
    {
        name: 'leave',
        description: 'Leave a game that you have joined',
        options: [
            {
                name: 'game',
                type: 4,
                description: 'The ID of the game',
                required: true,
            },
        ],
    },
    {
        name: 'kick',
        description: 'Kick a player from an open game',
        options: [
            {
                name: 'game',
                type: 4,
                description: 'The ID of the game',
                required: false,
            },
            {
                name: 'player',
                type: 6,
                description: 'The player to kick',
                required: false,
            },
        ],
    },
    {
        name: 'games',
        description: 'List joinable open games',
        options: [
            {
                name: 'search',
                type: 3,
                description: 'Search options to narrow results',
                required: false,
            },
        ],
    },
    {
        name: 'start',
        description: 'Start a full game and track it for ELO',
        options: [
            {
                name: 'game',
                type: 4,
                description: 'The ID of the game',
                required: true,
            },
            {
                name: 'name',
                type: 3,
                description: 'The name of the game',
                required: true,
            },
        ],
    },
    {
        name: 'guide',
        description: 'Show an overview of what the bot is for',
        options: [],
    },
    {
        name: 'credits',
        description: 'Display development credits',
        options: [],
    },
    {
        name: 'stats',
        description: 'Display statistics on games logged with this bot ',
        options: [],
    },
    {
        name: 'ping',
        description: 'Ping everyone in one of your games with a message',
        options: [
            {
                name: 'game',
                type: 4,
                description:
                    'The ID of the game to ping (defaults to the channel)',
                required: false,
            },
        ],
    },
    {
        name: 'staffhelp',
        description: 'Get staff help on bot usage or game disputes',
        options: [
            {
                name: 'message',
                type: 3,
                description: 'The message to send to the staff',
                required: true,
            },
        ],
    },
    {
        name: 'balance',
        description: 'Print some stats on PolyChampions league balance',
        options: [
            {
                name: 'system',
                type: 3,
                description: 'Draft score to use',
                required: false,
                choices: [
                    {
                        name: 'd2',
                        value: 'd2',
                    },
                    {
                        name: 'd3',
                        value: 'd3',
                    },
                    {
                        name: 'd4',
                        value: 'd4',
                    },
                ],
            },
        ],
    },
    {
        name: 'season',
        description: 'Display team records for one or all seasons',
        options: [
            {
                name: 'season',
                type: 4,
                description: 'The season to see records for',
                required: false,
            },
        ],
    },
    {
        name: 'novas',
        description: 'Join yourself to the Novas team',
        options: [],
    },
    {
        name: 'roleelo',
        description:
            'Prints list of players with a given role and their ELO stats',
        options: [
            {
                name: 'sort',
                type: 3,
                description: 'Sorting mode to use',
                required: false,
            },
            {
                name: 'role',
                type: 8,
                description: 'Role to restrict to',
                required: false,
            },
        ],
    },
    {
        name: 'league_export',
        description: 'Export all league games to a CSV file',
        options: [],
    },
];
