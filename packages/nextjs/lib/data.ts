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
    "hey there want some hats?", // what rekifar says
    [
      response("no", "sure you do"), // [what user responds with, what rekifar says back]
      response("yes", "no you don't"),
      response("maybe", "maybe"),
      response("foo", "bar"),
    ], // what the user can say]),
  ),
  dialogue("hey there want some hats?", [
    response("no", "sure you do"),
    response("yes", "no you don't"),
    response("maybe", "maybe"),
    response("foo", "bar"),
  ]),
];
