const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    config: {
        commands: ["setup"],
        name: "setup",
        help: "setup",
        enabled: true
    },

    run: async ({ message }) => {
        message.delete();

        const row1 = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('OyuncuSikayeti')
                    .setLabel('Oyuncu şikayeti')
                    .setStyle('DANGER'),
                new MessageButton()
                    .setCustomId('GenelSorunlar')
                    .setLabel('Genel sorunlar')
                    .setStyle('SECONDARY'),
                new MessageButton()
                    .setCustomId('Diger1')
                    .setLabel('Diğer')
                    .setStyle('PRIMARY')
            );

        try {
            await message.channel.send({
                embeds: [{
                    title: 'Destek Talebi',
                    description: 'Troll destekler, gereksiz destekler cezalandırılır. Lütfen destek talebinde etkiet atmayınız.',
                    color: '58628B',
                    footer: {
                        text: 'www.salorant.com'
                    }
                }],
                components: [row1]
            });
        } catch (error) {
            console.error('Mesaj gönderilirken bir hata oluştu:', error);
        }
    }
};