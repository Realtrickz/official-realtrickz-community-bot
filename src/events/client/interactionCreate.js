module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (interaction.isChatInputCommand()) {
            const { commands } = client;
            const { commandsName } = interaction;
            const command = commands.get(commandsName);
            if (!command) return;

            try {
                await commands.execute(interaction, client);
            } catch (error) {
                console.log(error);
                await interaction.reply({
                    content: `Something went wrong while executing this command....`,
                    ephemeral: true
                })
            }
        }
    }
}