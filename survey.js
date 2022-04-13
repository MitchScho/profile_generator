const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name? Nicknames are also acceptable :) ",(answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
    rl.question("What's an activity you like to do? ", (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);
        rl.question("What do you like to listen to while you do that? ",(answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);
            rl.question("Which meal during the day is you favourite? ", (answer) => {
              console.log(`Thank you for your valuable feedback: ${answer}`);
                rl.question("Which meal during the day is you favourite? ",(answer) => {
                  console.log(`Thank you for your valuable feedback: ${answer}`);
                    rl.question("What's your favourite thing to eat for that meal? ",(answer) => {
                      console.log(`Thank you for your valuable feedback: ${answer}`);
                        rl.question("Which sport is your absolute favourite? ",(answer) => {
                          console.log(`Thank you for your valuable feedback: ${answer}`);
                            rl.question("What is your superpower? Tell us what you are amazing at!? ",(answer) => {
                              console.log(`Thank you for your valuable feedback: ${answer}`);

                              rl.close();
                            }
                          );
                       }
                    );
                  }
                );
              }
            );
          });
        }
      );
    });
  }
);









