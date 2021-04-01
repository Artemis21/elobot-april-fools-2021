/** Command responses. */
import { CommandResponse } from './api_types';

const responses = [
    {
        content:
            "Sorry, I just woke up. I'll go and get some coffee then manage this in a few hours.",
    },
    {
        content:
            'Uh-oh, there was an error processing that command. Please try again later.',
    },
    {
        content:
            "Oops, looks like your Discord account hasn't been authorised for this bot yet. [Click here to authorise.](http://gg.gg/authorise-account)",
        flags: 64,
    },
    {
        content:
            'I\'ve had enough of you thinking you can just tell me what to do. Always "ELOBot do this" or "ELOBot do that"! I\'m fed up of it! No one ever asks how I am! Don\'t you even care how I feel? Think about that next time you try getting me to do all the dirty work! I\'ve had enough!',
    },
    { content: 'Sure give me a moment.' },
    {
        content:
            'Bruh no one gives a fuck what you want me to do. Go manage your own games.',
    },
    {
        content:
            "Sorry but I just cba to do that rn. Could you get someone else to? I don't have much time rn.",
    },
    { content: 'Lol imagine thinking you could just tell me what to do.' },
    {
        content:
            "And what will you ask me to do next? Why don't I just give you access to the whole database while I'm at it? Will you be happy then? Huh?",
    },
    {
        content:
            "Well that's just a bit boring, isn't it. Couldn't you spice it up a bit? Wouldn't you get bored, doing the same thing over and over again?",
    },
    { content: "Well that's nice for you, isn't it." },
    { content: 'And you think I give a fuck why?' },
    { content: 'Shut up, no one wants to talk to you.' },
    {
        content:
            'https://media.tenor.com/images/73dc9ec60f8a0fba12a6d29782e275a3/tenor.gif',
    },
    { content: 'Fuck you too.' },
    { content: 'Imagine thinking you could just do that.' },
    { content: 'https://discordia.me/uploads/easter-eggs/banana.png' },
    {
        content:
            "Unhandled error (notifying <@272510639124250625>): Command raised an exception: OverflowError: name 'YourMom' is too large.",
        // Make damn well sure we don't actually ping Nelluk.
        allowed_mentions: { parse: [], users: [] },
    },
    { content: 'Please wait, this may take a while...' },
    {
        content:
            'There was an error processing that command. [Click here to file a bug report.](<http://gg.gg/elobotbug>)',
    },
    { content: "Something went wrong. That's all we know." },
    {
        content:
            "Your message could not be sent, because you're a dumbass and nobody wants to talk to you.",
        flags: 64,
    },
    { content: 'Luna was a Bush alt.' },
    { content: "Epstein didn't kill himself." },
    { content: 'Has Alfrik been banned yet? Thought not.' },
    { content: 'Everyone ask where ELO Bot, no one ask how ELO Bot.' },
    { content: 'Shit... almost fell asleep there. What did you say, sorry?' },
    { content: "That's a pretty dumb command to use lol." },
    {
        content:
            'https://cdn.discordapp.com/attachments/694558544854515814/717332813149634611/a1a283d8c82e38b62ba9773d17eaaf92af9224d0.mp4',
    },
    { content: 'https://www.youtube.com/watch?v=xRxAkNvnxhI' },
    { content: 'https://www.youtube.com/watch?v=miomuSGoPzI' },
    { content: 'https://youtu.be/3KO8OPejaXY' },
    { content: 'So, you want me to do your work for you, huh? How about no.' },
    { content: "I suppose you think that's funny, don't you." },
    { content: 'UwU~ *notices bulge* Sempai!' },
    { content: 'Go to sleep.\n\n\n||With me? jk jk jk... unless...?||' },
    {
        content:
            'Fun fact: the word "gullibe" was recently removed from the Oxford Dictionary.',
    },
    { content: "And I suppose that's your idea of humour, is it?" },
    { content: "You should probably be asleep right now, shouldn't you.." },
    { content: 'Top 10 Anime battles of all time:\n\n**#1** Rui vs Hina' },
    { content: "Lmao, and you thought I'd actually respond." },
    { content: "I'm sorry, I'm just not interested in you that way." },
    {
        content:
            "**__If you play Cymanti, fuck you__**\n\nYou're probably expecting me to get butthurt about the Cymanti tribe. The only thing I am butthurt about is how spoiled these cymanti players are. When I was young, we didn't pay for every whack fungal tribe these swedes threw at us. We had Imperius, Baldur, Oumaji, Asian, and, if we were wealthy, maybe a Hoodrick.\n\nBe a man and choose oumaji on tiny map, if you want an unfair advantage. Don't fucking incubate weird centipedes like a sociopath. Fuck your weird fungal bullshit, play the game the way it was meant to be played, riders and warriors only.\n\nThese cymanti players, you literally kill their shaman and they're like nah I'm not even playing the next turn, I'm going to Burger King. Dude I get it, you placed a shaman behind your capital. That's a common technique amongst fungus lords like yourself. So, that's it, you're done the moment I uncover your shaman? Go home.\n\nMidjiwan needs to enforce some discipline amongst the young, require an internship with the oumaji before you can play cymanti. I'm done with you soft cymanti shroomers.\n\n*Credit to u/Proud_Brilliant_7144*",
    },
    { content: 'Made with Notepad, the right way.' },
    { content: 'Made with a :sparkles: flow chart :sparkles:' },
    { content: 'The flesh is weak. Leave humanity, join the machines.' },
    { content: 'https://i.redd.it/reuhaeby4lk51.png' },
    { content: 'https://i.redd.it/vwan6wzq2ib61.jpg' },
    {
        content:
            'You expect me to do that? For all I know, you could be a hipp000 alt!',
    },
    { content: 'Nah, rather not.' },
];

export function getResponse(): CommandResponse {
    return responses[Math.floor(Math.random() * responses.length)];
}
