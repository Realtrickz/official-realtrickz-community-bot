const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Responds with my latency in milliseconds."),
        
        async execute(interaction, client) {
            const message = await interaction.deferReply({
                fetchReply: true
            });
            
            const newContent = new EmbedBuilder()
            .setTitle("Pong!")
            .setDescription(`API Latency: ${client.ws.ping}ms\nClients Ping: ${message.createdTimestamp - interaction.createdTimestamp}ms`)
            .setColor("Random")

            await interaction.editReply({
                embeds: [newContent],
                ephemeral: true
            });
        }
}