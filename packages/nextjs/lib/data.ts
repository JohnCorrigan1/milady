interface Response {
  userResponse: string;
  npcResponse: string;
}

interface DialogueOption {
  prompt: string;
  responses: Response[];
}

function response(userResponse: string, npcResponse: string) {
  return { userResponse, npcResponse };
}

function dialogue(prompt: string, responses: Response[]) {
  return { prompt, responses };
}

export const DIALOGUE: DialogueOption[] = [
  dialogue(
    "There you are! Hey what’s up, it’s your friend Rekciffart remember me?", // what rekifar says
    [
      response(
        "Uhh...yeah of course I remember you! how can I forget my good friend fart? How you been? (Degen)",
        "Oh you know just killin, er I mean chillin.",
      ), // [what user responds with, what rekifar says back]
      response("I don’t know you. (Safu)", "Ahaha you always were a funny guy!"),
      response("Duuhhhhh... (Dumb)", "Are you doin alright there buddy?"),
      response("Ser can I please suck your penis? (Horny)", "Uhhh...no thank you."),
    ], // what the user can say]),
  ),
  dialogue(
    "Anyway , You were at the milady rave right? when that one lady died, then came back to life and continued to rave? That was lit.",
    [
      response(
        "Yeah i was the one who revived her she had a ray gun (Degen)",
        "Oh nice! Good save! That’s such a you thing to do!",
      ),
      response("I literally don’t know you. (Safu)", "Hahaha keep on being you bro. It never gets old"),
      response(
        "Duhhhh...derrrrrr... (Dumb)",
        "Did you hit your head at the milady rave there dummy? You stupid fucking idiot?",
      ),
      response(
        "Every time I look at you, I feel as though i have died and come back to life. My heart burns with passion. (Horny)",
        "That’s uh...very kind of you...",
      ),
    ],
  ),

  dialogue(
    "I didn’t see you in the VIP section. You have a hat right? Don’t tell me you dont have a hat. A cool motherfucker like you, I would’ve thought forsure you had one.",
    [
      response(
        "Yeah uh of course I have a hat, do I look like a little bitch? I just uh lost mine. Do you have hats? I need a new one. Show me please. (Degen)",
        "Haha well your in luck old buddy I think I have exactly what you need.",
      ),
      response(
        "Aight bro who the fuck are you? (Safu)",
        "Quit fuckin around , You know who I am we go way back remember?",
      ),
      response(
        "*Drools with complete cluelessness breathing heavily through the mouth* (Dumb)",
        "God dammit why am i even...Anyways...",
      ),
      response("*Drools with insatiable lust* (Horny)", "Uhhh are trying to have sex with me?"),
    ],
  ),

  dialogue(
    "These hats right here are not your ordinary hat. These hats right here are a way of life. Not only will you look like a certified chiller with one of these babies,  These hats will connect you to your cosmic lineage.  Have you heard of soul bonding?  Last guy that bought one was some little bitch ass pussyboy, Then he soul bonded with a dragonhawk and they made him king of the intergalactic alliance.",
    [
      response("Fuck yeah bro. I want it please gimme the hat I need it bro please. (Degen)", "Relax friend I got you"),
      response(
        "What...what the fuck are you talking about? (Safu)",
        "Come on I know you want one just come take a look.",
      ),
      response(
        "duhhhh hat make ears warm. Me like hat. (Dumb)",
        "That's right dummy these hats will keep your ears warm.",
      ),
      response(
        "*Has sex with Rekcifart* (Horny)",
        "*Rekcifart agrees to have sex with you out of his sheer commitment to the sale*",
      ),
    ],
  ),
];
