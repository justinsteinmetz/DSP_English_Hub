https://justinsteinmetz.github.io/DSP_English_Hub/

# DSP English Hub

**The central resource hub for the English department at Deutsche Schule Prag.**

A single-page directory of all classroom tools, self-study resources, reading guides, identity instruments, and MUN materials — organised by grade band and linked directly to deployed GitHub Pages applications.

---

## Structure

The hub is a single HTML file (`index.html`) deployed to GitHub Pages. It contains no frameworks, no build step, and no server dependencies. All linked resources are separately deployed GitHub Pages repositories.

The hub is organised into five sections:

| Section | Grade band |
|---|---|
| Grades 5 & 6 | Grammar & Language · Reading |
| Grades 7 & 8 | Grammar & Language · Reading |
| Grades 9 & 10 | Grammar, Culture & Language · Reading |
| Grades 11 & 12 | Literature, Language & Abitur Themenfelder |
| Model United Nations | Simulations & Resources |
| Book Guides | Charlotte's Web · Because of Winn-Dixie |

---

## Full resource inventory

### Grades 5 & 6

**Grammar & Language**

| Resource | Type | What it does |
|---|---|---|
| MIME IT! | Classroom | Adverbs of manner · Ably multiplayer sync between board and phones |
| How Much? How Many? | Self-study | Quantifiers · 24 questions |
| Faster · Better · Best | Self-study | Comparative & superlative adverbs |
| Question Market | Self-study | Wh-questions · Band 1 Unit 3 |

**Reading**

| Resource | Type | What it does |
|---|---|---|
| Charlotte's Web | Reading | E. B. White · Full interactive lesson |

---

### Grades 7 & 8

**Grammar & Language**

| Resource | Type | What it does |
|---|---|---|
| GrammarBlitz | Self-study | Modals + present perfect vs past simple |
| LIFE XP | Classroom | Present perfect · live speaking game · Ably multiplayer |
| Passive with Modal Verbs | Lesson | must · should · can · may · will · B1 |
| Reported Speech | Lesson | 20-minute lesson · tense shift · B1 |
| Reported Questions | Self-study | Reference + exercises · wh- & yes/no · B1 |
| Deposition Room | Classroom | Reported questions · witness scenario · suspicion meter |
| Reflexive & Reciprocal Pronouns | Self-study | myself · each other · when one choice changes meaning |
| Passive Voice — Full Revision | Self-study | 9 tenses · special forms · uses · Grade 8 |
| The Blame Game | Classroom | PP · personal · modal passive · write then identify |
| Plan Builder | Classroom | going to · adverbs of manner · AI feedback · productive verb entry |

**Reading**

| Resource | Type | What it does |
|---|---|---|
| Because of Winn-Dixie | Literary | Kate DiCamillo · 6-zone thinking environment · non-linear |

---

### Grades 9 & 10

**Grammar, Culture & Language**

| Resource | Type | What it does |
|---|---|---|
| How to Read a Photograph | Classroom | Visual literacy · 5-step framework · NYT method |
| Fair Go — Australian Culture | Culture | Communication, society & identity · 6 scenarios |
| Human Rights — Not Optional | Culture | Behaviour-modification lesson · 60–90 min |
| Future Tenses: The Party Chat | Self-study | will · going to · present continuous |
| Don't Write an Essay | Study guide | Article writing · exam technique · B1–B2 |
| How to Debate — Part 1 | Lesson | Build & Fail · Argument structure |
| How to Debate — Part 2 | Lesson | Break & Rebuild · Rebuttal & counter-argument |
| Adverbial Clauses | Self-study | Subordination · types, conjunctions & clause movement · B2 |

---

### Grades 11 & 12

**Literature & Language**

| Resource | Type | What it does |
|---|---|---|
| The Sonnet's Argument | Self-study | Sonnets 18 & 130 · close reading · form, theme & rhetoric |
| The Bard's Tribunal | Classroom | Shakespeare · Sonnets · buzzer quiz · up to 8 players |

**Abitur Themenfelder 2027–29**

All instruments below are aligned to the KMK Themenfelder for English Abitur cohorts 2027, 2028, and 2029. Resources are tagged by Themenfeld.

*The Individual & Society*

| Resource | What it does |
|---|---|
| Who Are You, Really | Identity instrument · behaviour, origin & conformity · AI portrait + unanswered question |
| The Danger Room | Socratic chamber · commit to a position · receive pressure · hold or move · AI synthesis |
| Default Settings | Inherited norms & snap judgements · input/output/loop · AI portrait |
| BIRTHMARKS | Archival identity instrument · race, culture & inherited identity · 6 sections · AI archivist's reading |
| SELF v SELFIE | Feed vs Draft · curated identity · the gap between performance and person · AI portrait |
| RPG4LIFE | Character build · assigned vs chosen roles · stats, buffs & debuffs · AI build analysis |
| Social Contract | Civic simulation · assigned profiles · political imagination · two-mode gap reading |
| When Yes Means No | Performed willingness · the cost of refusal · consent & identity · AI structural reading |

*Science & Technology*

| Resource | What it does |
|---|---|
| Input / Output | Data, consent & behavioural systems · text-drift experience + diff debrief |
| Surveillance | Data, consent & chilling effects · discussion & analysis tool |

*Politics, Culture & Society — USA* · coming  
*Politics, Culture & Society — UK* · coming

---

### Model United Nations

| Resource | Type | What it does |
|---|---|---|
| UNGA — When the Rule-Maker Breaks the Rules | MUN | UN simulation · sovereignty, intervention, legitimacy |
| Position Papers | Coming | In development |

---

### Book Guides

| Title | Author | Grade | Status |
|---|---|---|---|
| Charlotte's Web | E. B. White | 5–6 | Live |
| Because of Winn-Dixie | Kate DiCamillo | 7–8 | Live |
| Grades 9–10 texts | TBD | 9–10 | Coming |

---

## AI-powered resources

Several resources use the Anthropic API via a Cloudflare Worker proxy. The API key is stored as a server-side secret and never exposed in the browser. All AI calls are proxied through `https://anthropic-proxy.justin-steinmetz.workers.dev`.

AI-powered resources:

| Resource | API use |
|---|---|
| Who Are You, Really | Portrait + unanswered question — 1 call per session |
| The Danger Room | 5 pressure responses + 1 synthesis — 6 calls per session |
| Default Settings | Portrait + discussion questions — 1 call per session |
| BIRTHMARKS | Archivist's reading + discussion questions — 1 call per session |
| SELF v SELFIE | Gap reading + discussion questions — 1 call per session |
| RPG4LIFE | Build analysis + discussion questions — 1 call per session |
| Social Contract | Civic record reading + discussion questions — 1 call per session |
| When Yes Means No | Gap reading + discussion questions — 1 call per session |
| Plan Builder | Sentence assessment — 1 call per round (up to 8 per session) |

Resources without API: MIME IT!, GrammarBlitz, LIFE XP, all lesson/study tools, both reading environments, The Blame Game, Input/Output, Surveillance, The Bard's Tribunal.

---

## Multiplayer resources

Two resources use Ably for real-time sync:

- **MIME IT!** — board display syncs with student phones
- **LIFE XP** — live multiplayer present perfect speaking game

---

## Deployment

The hub deploys from the `DSP_English_Hub` GitHub repository. Push `index.html` to the `main` branch; GitHub Pages serves it automatically.

Each linked resource is a separate repository. The hub links to `https://justinsteinmetz.github.io/{repo-name}/`.

### Adding a new resource

1. Build the tool as a single `index.html` file
2. Push to a new GitHub repository with Pages enabled
3. Add an entry to `index.html` in this repository following the existing card structure
4. Push the updated hub

### Updating an existing resource

Edit the tool's own repository. The hub links are live — no hub update needed unless the URL changes or the meta description needs updating.

---

## Type badge system

| Badge | Meaning |
|---|---|
| Classroom | Teacher-led — requires setup or facilitation |
| Self-study | Independent — students use without teacher direction |
| Literary | Thinking environment — non-linear, exploratory |
| Reading | Book guide — structured literary resource |
| Study guide | Lesson resource — reference or structured study tool |
| Culture | Society & identity — cross-curricular cultural content |
| Lesson | Structured worksheet — focused grammar or skill lesson |
| Themenfeld | Abitur Themenfelder — aligned to KMK 2027–29 |
| MUN | Simulation — Model United Nations material |
| Soon | In development |

---

## Safeguarding note

**When Yes Means No** contains a mandatory safeguarding overlay that cannot be bypassed without editing the source code. It must be introduced with care and is not appropriate for classes where trust has not been established. See the individual README for full facilitation guidance.

**Default Settings** and **BIRTHMARKS** also address sensitive identity territory (gender norms, race, family history). Teacher framing is required before deployment.

---

## Maintenance

The hub file is maintained manually. When resources are deployed or URLs change, update `index.html` in this repository and push.

The `hub-index.html` working file is maintained separately in the development environment and copied to `index.html` for deployment. Always deploy as `index.html`.

