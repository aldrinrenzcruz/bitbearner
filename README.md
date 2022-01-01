# Bitbearner
 A converter tool for the game, [Bitburner](https://danielyxie.github.io/bitburner/) - converts scripts from NS1 to NS2 or vice versa.

 # How to use
First, head over to https://bitbearner.netlify.app/bitbearner
Paste your script inside the <b>main(ns)</b> function:
```js
export async function main(ns) {
//Your code goes here
}
```
If you want to convert a `.script` to `.js` or `.ns`, simply click the <b>Convert NS1 to NS2</b> button.

If it's the other way around, click the <b>Convert NS1 to NS2</b> button.

This tool simply adds or deletes `ns.` in every Netscript functions, it also adds/deletes `await` for the functions it's needed.

I haven't fully explored the game, so I'd appreciate if you'd let me know about any errors you encounter.

# About this tool
I've created this converter mainly to practice coding, therefore it's in a <em>very simple</em> state right now.

It's intended, mostly, for new players of <em>Bitburner</em> who, like me, used `ns1` when starting and now wants to switch to `ns2`.

It can also be used when helping new players who uses `ns1` in the Discord channel or other forums in general. That way, its faster to convert the scripts they're sharing for testing purposes.

Feel free to use and reuse anything in this tool.

# Resources
If you're interested to learn more about Netscript, check out the ff:
- Basic documentation: https://bitburner.readthedocs.io/en/latest/
- All NS functions:   https://github.com/danielyxie/bitburner/blob/dev/markdown/bitburner.ns.md
- Ralic's NS1-to-NS2 Guide: https://github.com/xRalic/NS1-to-NS2-Guide

# Mentions
Huge thanks to @lethern for providing all the RegEx needed to make the tool perform much better!
And special thanks to everyone in the [Discord channel](https://discord.gg/TFc3hKD) for providing advice and support, I have learned a lot!