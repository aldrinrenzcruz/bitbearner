# Bitbearner
 A converter tool for the game, [Bitburner](https://danielyxie.github.io/bitburner/) - converts scripts from `NS1` to `NS2` or vice versa.

No more tiresome manual addition/deletion of `ns.` and `await`!

- [Bitbearner](https://bitbearner.netlify.app/bitbearner/) is intended, mostly, for new players of Bitburner, who, used `ns1` when starting out and now wants to switch to `ns2`.
- It can also be used when helping new players who are using `ns1`.

## How to use
First, head over to https://bitbearner.netlify.app/bitbearner/

Then, paste your script in the textarea:
```js
//Your code goes here
```
If you want to convert a `.script` to `.js` or `.ns`, simply click the <b>Convert NS1 to NS2</b> button. If it's the other way around, click the <b>Convert NS1 to NS2</b> button.

How this tool works is by simply adding/deling `ns.` in every Netscript functions. It also add/delete `await` if necessary. Lastly, it will automatically wrap the whole script inside the `main function`.

Feel free to use and reuse anything in this tool.

## Limitations & stuff to improve

These will have to be changed manually:
- addition/deletion of `args` in a function like `(args)
- deletion of `import` and `export` when converting NS2 to NS1
- wrapping of additional `async functions`

Note that only the first and main `export async function main(ns)` will be handled in the conversion.

TODO:
- Tweak the script to prevent duplicate conversions when clicking the same convert buttons multiple times.
- Add a text that shows whether the script in the textarea is `.script` or `.js` and probably do something about it
- Add a syntax-highlighter

I'm a beginner who's just trying to practice. If you have any suggestions or ideas on how to improve this, you can let me know or send a PR.

## Resources
If you're interested to learn more about Netscript, check out the ff:
- [Ralic's NS1-to-NS2 Guide](https://github.com/xRalic/NS1-to-NS2-Guide)
- [Bitburner's documentation](https://bitburner.readthedocs.io/en/latest/)
- [List of Netscript functions](https://github.com/danielyxie/bitburner/blob/dev/markdown/bitburner.ns.md)

## Mentions
Huge thanks to @lethern for providing all the RegEx needed to make the tool perform much better!
And special thanks to everyone in the [Discord channel](https://discord.gg/TFc3hKD) for providing advice and support, I keep learning new things from y'all!