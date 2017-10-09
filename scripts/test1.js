// Your app must:

// * Have a message post to Slack based on user input
// * Do at least 3 different things.
// * One of the commands must **utilize the list of people in the class to send a direct message or reply**.
// * Leverage [Hubot](https://github.com/slackhq/hubot-slack)
// * Use at least 1 conditional to change the outcome of a Slackbot.

// #### Bonus

// * Leverage a for loop to iterate over a collection
// * Introduce a random component
// * Include an image in the response in addition to text

// ### Necessary Deliverables

// * A **working Slackbot, built by you**, that can be run in the class Slack room.
// * A **new git repository hosted on Github**, where codebase is maintained.
// * **A ``readme.md`` file** with explanations of what your bot does, what commands it 
// responds to, the approach taken, installation instructions, 
// unsolved problems, etc.



module.exports = function(bot) {
    
// bot responds to yo

    bot.hear(/ yo /, function(res) {
    return res.send("wuzzup dawg!");
    });

   
// bot returns current time in Tokyo
// the code converts time value into readable time and add AM or PM

    bot.respond(/what time is it in (.*)/i, function(msg) {
      var name;
      name = msg.match[1];
      if (name == "Tokyo"){
        let d = new Date();
        let localTime = d.getTime();
        let localOffset = d.getTimezoneOffset() * 60000;
        let utc = localTime + localOffset;
        let offset = 9.0;   
        let tokyo = utc + (3600000*offset);
        let nd = new Date(tokyo);
        let ampm = nd.getHours()
        if (ampm <= 12) {
          ampm = "AM";
        } else {
          ampm = "PM"
        }
        return msg.send("The current time in Tokyo is " + nd.toLocaleString() + " " + ampm);
      } else {
        return msg.reply("I'm sorry, either the construct of time does not exist in that location or my creator did not design me to calculate an answer.");
      }
    });

    // bot retunrs the volume of a cone when given cone height and radius 
    // the volume of a cone = pi * radius^2 * height / 3

    bot.respond(/what is the volume of a cone with height (.*) and radius (.*)/i, function(msg) {
      var height;
      var radius;
      height = msg.match[1];
      radius = msg.match[2];
          let volume = (Math.PI * Math.pow(radius, 2) * (height/3)).toFixed(2);
          return msg.reply("The volume of that cone is " + volume + " units cubed");
    });

};


// 


// write READme