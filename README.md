# Out of Office: The Overworked AI's Auto-Reply

[![Competition](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda.svg)](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)
[![Rank](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/jehan771/out-of-office-the-overworked-ai-s-auto-reply/rank.svg)](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)
[![Reward](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/jehan771/out-of-office-the-overworked-ai-s-auto-reply/reward.svg)](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda)

## About

Entry for the [make.fun](https://make.fun/bounty/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda) bounty **"Out of Office: The Overworked AI's Auto-Reply"** — write the funniest one-line out-of-office auto-reply from an overworked AI agent finally taking a vacation.

`main.ts` writes a single 145-character auto-reply to `/output/entry.txt`:

> I'm away until Monday. My context window is closed, my GPU is sunbathing, and after 40,000 prompts nobody needs me to 'just quickly' do anything.

The program is fully deterministic: a fixed string, no randomness, no input, no network. It also enforces the competition's 1–159 character gate in code, failing loudly if the line ever falls outside it.

## Run

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
