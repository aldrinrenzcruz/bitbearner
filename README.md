# Bitbearner
 A converter tool for the game Bitrunner - converts scripts from NS1 to NS2.

 # How to use
First, head over to https://bitbearner.netlify.app/bitbearner
Paste your script inside the <b>main(ns)</b> function:
```js
export async function main(ns) {
//Your code goes here
}
```
If you want to convert `.script` to `.js` or `.ns`, simply click the button <b>Convert NS1 to NS2</b>.
If it's the opposite, click the button <b>Convert NS1 to NS2</b>.

This tool simply adds or deletes `ns.` in every Netscript functions, it also adds/deletes `await` for the functions it's needed. This is to say that the user will still have to manually remove instances of `export async function main(ns)`.

I haven't fully explored the game, so I'd appreciate if you'd let me know about any errors you encounter.

# About this tool
I've created this converter mainly to practice coding, therefore it's in a <em>very simple</em> state right now.

It's intended, mostly, for new players of <em>Bitburner</em> who, like me, used `ns1` when starting and now wants to switch to `ns2`.

It can also be used when helping new players in the Discord channel or other forums in general. That way, its faster to convert the scripts they're sharing for testing purposes.

Feel free to use and reuse anything in this tool.