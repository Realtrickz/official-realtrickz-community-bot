const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Responds with my latency in milliseconds."),
        async execute(interaction, client) {
            const message = await interaction.deferReply({
                fetchReply: true
            });

            const newMessage = `API Latency: ${client.ws.ping}\nClients Ping: ${message.createdTimestamp - interaction.createdTimestamp}`
            await interaction.editReply({
                content: newMessage
            });
        }
}