# Bitbearner
 A converter tool for the game, [Bitburner](https://danielyxie.github.io/bitburner/) - converts scripts from NS1 to NS2 or vice versa.

No more tiresome manual addition/deletion of `ns.` and `await`!

- [Bitbearner](https://bitbearner.netlify.app/bitbearner/) is intended, mostly, for new players of <em>Bitburner</em> who, like me, used `ns1` when starting and now wants to switch to `ns2`.
- It can also be used when helping new players who are using `ns1`.

## How to use
First, head over to https://bitbearner.netlify.app/bitbearner/

Then, paste your script in the textarea:
```js
//Your code goes here
```
If you want to convert a `.script` to `.js` or `.ns`, simply click the <b>Convert NS1 to NS2</b> button.

If it's the other way around, click the <b>Convert NS1 to NS2</b> button.

This tool simply add/delete `ns.` in every Netscript functions, it also add/delete `await` if necessary. Furthermore, it will automatically wrap the whole code inside the `main function`.

Feel free to use and reuse anything in this tool.

## Resources
If you're interested to learn more about Netscript, check out the ff:
- Basic documentation: https://bitburner.readthedocs.io/en/latest/
- All NS functions:   https://github.com/danielyxie/bitburner/blob/dev/markdown/bitburner.ns.md
- Ralic's NS1-to-NS2 Guide: https://github.com/xRalic/NS1-to-NS2-Guide

## Mentions
Huge thanks to @lethern for providing all the RegEx needed to make the tool perform much better!
And special thanks to everyone in the [Discord channel](https://discord.gg/TFc3hKD) for providing advice and support, I have learned a lot!