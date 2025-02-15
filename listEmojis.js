import emoji from 'emoji-dictionary';
import fs from 'fs';

const emojiNames = emoji.names.map(name => `${emoji.getUnicode(name)} ${name}`).join('\n');

fs.writeFile('emojiNamesWithIcons.txt', emojiNames, (err) => {
  if (err) throw err;
  console.log('Emoji names with icons have been saved to emojiNamesWithIcons.txt');
});