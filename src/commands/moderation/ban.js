const {
    SlashCommandBuilder,
    EmbedBuilder,
    ButtonBuilder,
    ButtonStyle,
    ActionRowBuilder,
  } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("ban")
      .setDescription("Ban's a specified user.")
      .addUserOption((option) =>
        option
          .setName("target")
          .setDescription("Choose a member you would like to take action on.")
          .setRequired(true)
      )
      .addStringOption((option) =>
        option.setName("reason").setDescription("Reason for taking this action.")
      )
      .addBooleanOption((option) =>
        option.setName("preserve_messages").setDescription("Preserve messages sent by a user?")
      )
      .addBooleanOption((option) =>
        option.setName("no_appeal").setDescription("Set's if a user is able to appeal or not.")
      ),
  
    async execute(interaction, client) {
      const user = interaction.option.getUser("target");
      let reason =
        interaction.option.getString("reason") || "No reason provided.";
    let no_appeal = interaction.option.getString("no_appeal") || false
    let preserve_messages = interaction.option.getString("preserve_messages") || true

      const member = await interaction.guild.members
        .fetch(user.id)
        .catch(console.error);
      if (!reason) reason = "No reason provided.";
      if (!no_appeal) no_appeal = false;
      if (!preserve_messages) preserve_messages = true;
  
      await member.ban({
        days: 1,
        reason: reason
      }).catch(console.error)
  
      // user.send({
      //     embeds: [usermsg]
      // }).catch(console.log("user's DMS's are turned off."))
    },
  };
  
  /*
  
  GuildName: interaction.guild.name
  Reason: constant (reason)
  
  */
  