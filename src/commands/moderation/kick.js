const {
  SlashCommandBuilder,
  EmbedBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Kick's a specified user.")
    .addUserOption((option) =>
      option
        .setName("target")
        .setDescription("Choose a member you would like to take action on.")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option.setName("reason").setDescription("Reason for taking this action.")
    ),

  async execute(interaction, client) {
    // const user = interaction.option.getUser("target");
    // let reason =
    //   interaction.option.getString("reason") || "No reason provided.";
    const member = await interaction.guild.members
      .fetch(user.id)
      .catch(console.error);
    if (!reason) reason = "No reason provided.";

    await member.kick(reason).catch(console.error);

    // user.send({
    //     embeds: [usermsg]
    // }).catch(console.log("user's DMS's are turned off."))
  },
};

/*

GuildName: interaction.guild.name
Reason: constant (reason)

*/
