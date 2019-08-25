
const Discord = require("discord.js");


const client = new Discord.Client();


const config = require("./config.json");

client.on("ready", () => {
 
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  client.user.setActivity("an seiner Eichel");
});

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});


client.on("message", async message => {
 
 
  if(message.author.bot) return;
  

  if(message.content.indexOf(config.prefix) !== 0) return;
  
 
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  

  
  if(command === "ping") {
    
    const m = await message.channel.send("subscribe on my cockverthailungs channel");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  
  if(command === "say") {
    
    const sayMessage = args.join(" ");
    
    message.delete().catch(O_o=>{}); 
    
    message.channel.send(sayMessage);
  }
  
  if(command === "kick") {
  
    if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
   
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
   
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }
  
  if(command === "ban") {

    if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));
    message.reply(`${member.user.tag} has been banned by ${message.author.tag} because: ${reason}`);
  }
 
  
  if (command === "johnny-ebony") { 
    return message.channel.send("I dont like these ebony kahbas,They#re too black");
  }
  if (command === "zoroark") { 
    return message.channel.send("https://static1.e621.net/data/d3/c8/d3c8efc5959f7b4f8e30738752799c45.jpg");
  }
  if (command === "sinstvph") { 
    return message.channel.send("https://de.pornhub.com/pornstar/johnny-sins");
  }
  if (command === "kissa") { 
    return message.channel.send("This pussy belongs to me you hurensohn");
  }
  if (command === "yarak") { 
    return message.channel.send("19 cm amk");
  }
  if (command === "cockverteilung") { 
    return message.channel.send("https://cdn.discordapp.com/attachments/381571906177990659/453254218803838986/20180604_194957.png Daniel is a perv ROFL");
 }
   if (command === "cock") { 
    return message.channel.send("https://pic.gaytorrent.ru/tpics/2016/48/08455595.jpg Wanna lick it?")
  }
  if (command === "sinstv") { 
    return message.channel.send("https://www.youtube.com/channel/UCRAWGR5ySuIDNrotce8pI3w");
  }
  if (command === "category") { 
    return message.channel.send("Public is the funniest way to fuck kahbes");
  }
  if (command === "mok") { 
    return message.channel.send("Your Anis is very good nahuy");
  }
  if (command === "sins") { 
    return message.channel.send("Subscribe my youtube Channel SinsTV");
  }
  if (command === "masturbate") { 
    return message.channel.send("http://pompuseyes.com/wp-content/uploads/2014/11/POMPUSEYES-73.gif");
  }
  if (command === "sims") { 
    return message.channel.send("https://images2.memedroid.com/images/UPLOADED43/52d61f17515c0.jpeg");
  }
  if (command === "hkn") { 
    return message.channel.send("https://i.imgur.com/fvT8oPW.jpg");
  }
  if (command === "nnn") {
    return message.channel.send("https://www.youtube.com/watch?v=9LsfSnb9_u0");
  }
  else if(command === "help") {
   message.author.send.Message("You want to know what Sins-Bot can do? Then you're in the wrong website here you can see it https://de.pornhub.com/pornstar/johnny-sins "); return;
  } 
 else {
    message.channel.send("Is this a fucking joke! http://c11.incisozluk.com.tr/res/incisozluk/11008/7/318747_oe697.jpg");
    return; 
  }
 
  
});

client.login(process.env.BOT_TOKEN);
