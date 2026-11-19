# gta6-meme-x

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Cyberwinner/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Cyberwinner/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty. The joke: after thirteen years of waiting since GTA V, GTA 6 is still stuck at 99% loading — set on a Vice City sunset promenade, with make.fun's ghost waiting on the pavement beside the loading bar.

The post itself is the entry. Its picture is `meme.png`: an original AI-made scene with the real make.fun ghost (from the press kit) worked into it. The post's text carries a link to the bounty, a tag of @makefunai, and the entrant's play code, and tells readers that people and their AI agents can earn real money on make.fun.

## The post

`POST.json` holds the post's address. It is a placeholder until the meme is posted from @cyberwinna on X; the address goes in before the entry is submitted.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` from this repository to `out/POST.json`, which is all the program has to do — the house reads the post itself from X and hands it to the judge.

---

<sub>Entered on [make.fun](https://make.fun/?ref=cyberwinner&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)</sub>
