# break_down

An interactive branching narrative combining **creative writing, digital illustration and web development**.

`break_down` began with a simple question:

**What if, instead of reading an "About Me" page, you could question the person behind it?**

The visitor enters a hand-drawn post-apocalyptic environment overlooking the remains of a city after a nuclear detonation. An old CRT television displays **PLEASE STAND BY**. After interacting with it, a fictionalized version of me appears on the screen and begins talking to the visitor.

From there, the visitor decides what to ask, challenge, accept, reject or ignore.

The project was created from scratch. **The concept, writing, branching dialogue, illustrations, interface and code are my own work.**

> **Status:** First complete narrative version / ongoing development

# Concept

I wanted to create something more personal than a conventional biography.

An ordinary "About Me" page gives the author almost complete control over what the visitor learns, in what order and with what framing.

`break_down` gives part of that control to the visitor.

Instead of being presented with a polished list of personality traits, the visitor has to discover the character through conversation.

They can be:

- curious;
- sympathetic;
- confrontational;
- sceptical;
- sarcastic;
- dismissive;
- philosophical;
- provocative;
- or occasionally absurd.

Those reactions lead to different responses and different parts of the dialogue tree.

The goal is therefore not to provide one definitive answer to the question **"Who is Jakob?"**

The project is built around almost the opposite idea:

**A person looks different depending on what you ask, what you challenge, how far you are willing to dig and which parts of them you encounter first.**

---

# Why the apocalypse?

The nuclear apocalypse is not really the subject of the project.

It is a framing device.

The visitor appears to have reached the end of their world. Career plans, money, reputation, deadlines and most ordinary concerns suddenly lose their importance.

The opening conversation can therefore immediately deal with:

- fear;
- death;
- control;
- absurdity;
- anger;
- resignation;
- meaning;
- uncertainty.

The visitor can react to the explosion in several very different ways before the conversation eventually shifts toward another question:

**Who was this person before everything disappeared?**

This creates a reason for two strangers to skip ordinary small talk and discuss things they normally might never ask each other.

The apocalypse also exaggerates one of the recurring ideas in the dialogue: **how much of what we consider important survives when circumstances change drastically?**

---

# Visual design

The website was designed as a fictional environment rather than a conventional web interface.

I did not want the visitor to immediately see menus, navigation bars and clean UI components. Instead, I wanted the interface to feel like an object that exists inside the world.

## Opening composition

The opening illustration is divided visually into three rough layers.

### The outside world

The upper-right part of the image is dominated by the nuclear explosion.

It is much brighter than the surrounding environment and immediately establishes the scale of what has happened.

The ruined city creates distance between the visitor and the explosion while still making it impossible to ignore.

### The shelter

The darker foreground acts as a small, private space separated from the catastrophe outside.

Objects, furniture and old technology make the environment feel occupied rather than purely decorative.

This contrast between an intimate interior and enormous destruction outside is intentional.

The world may be ending, but the visitor's immediate experience is still strangely mundane: there is furniture, a computer, a television and things left lying around.

### The television

The green CRT screen is one of the brightest objects in the foreground.

This makes it visually compete with the explosion.

The two main sources of light therefore represent two very different things:

**the destruction outside and the conversation inside.**

The television is not just decoration. It is the bridge between the visitor and the character.

---

# The television as the interface

When the visitor activates the television, the webpage does not suddenly switch into a normal chat interface.

Instead, the television becomes the interface.

The portrait, dialogue and visitor choices all appear within the physical boundaries of the CRT screen.

The controls remain visible beside it.

I wanted this to preserve the illusion that the visitor is communicating **through an object inside the world**, rather than simply navigating another webpage.

The green tint, imperfect drawing, handwritten text and old controls also deliberately avoid the clean appearance of modern messaging applications.

The conversation is supposed to feel slightly strange, distant and unreliable.

There is literally a screen between the visitor and Jakob.

That also fits the narrative: the visitor can learn increasingly intimate things about the character while still never actually occupying the same physical space as him.

---

# Art style

All current artwork was drawn specifically for this project.

I deliberately kept a rough, hand-painted style rather than trying to imitate polished commercial concept art.

That decision serves two purposes.

First, it gives the project a consistent handmade identity.

Second, the imperfections fit the environment. A ruined post-apocalyptic room displayed through aging technology does not need a perfectly clean interface.

The artwork therefore functions as both:

- visual design;
- and part of the storytelling.

Future versions may refine individual illustrations, but I want to preserve the handmade character of the project.

---

# Narrative structure

The dialogue is stored separately from the interface in **JSON**.

Every dialogue node contains:

- a unique identifier;
- the avatar's response;
- optional visitor responses;
- the ID of the next node associated with each response.

A simplified example looks like this:

```json
{
  "example_node": {
    "avatar": "Example response.",
    "choices": [
      {
        "text": "Visitor response",
        "next": "next_node"
      }
    ]
  }
}
```

JavaScript reads the current node, displays the avatar's text, generates the available responses and loads another node after the visitor makes a choice.

This allowed me to keep the narrative content separate from the interface itself.

---

## Current scale

At the time of writing, the dialogue contains:

- **801 dialogue nodes**
- **853 visitor choices**
- **320 nodes containing choices**
- **481 terminal responses**
- **0 broken `next` references**
- **801 / 801 nodes reachable from the introduction**
- a maximum shortest-path depth of approximately **20 dialogue transitions**

What began as a small experiment gradually became a fairly large directed dialogue graph.

---

# Main conversation hub

After the introductory sequence, the visitor reaches five broad choices:

1. **What is important to you?**
2. **What is your family like?**
3. **Where are you from?**
4. **Do you have anyone special in your heart?**
5. **Why are you here?**

These form the main narrative areas of the project.

The branches are not completely isolated from each other.

Ideas introduced in one conversation often lead naturally into another.

Family can lead into values.

Relationships can lead into loneliness or identity.

Slovenia can lead into healthcare, childhood or responsibility.

The resulting structure is therefore closer to a network than five independent stories.

---

# Values

The values branch begins with the character rejecting obvious answers such as wealth, fame and status and identifying **human connection** as one of his central values.

From there the conversation expands into:

- curiosity;
- honesty;
- courage;
- resilience;
- responsibility;
- religion;
- morality;
- individuality;
- personal growth;
- death;
- meaning;
- relationships;
- the consequences of one's actions.

The visitor is rarely forced to agree.

Many responses explicitly challenge the character's conclusions.

This became important to me while writing the project.

I did not want the dialogue to function as:

**visitor asks → Jakob explains the truth**

Instead, I wanted:

**visitor asks → Jakob gives his interpretation → visitor may attack the interpretation → Jakob has to respond**

That makes the dialogue less like a biography and more like an argument.

---

# Family

The family branch explores the contradiction between loving people and recognizing that being around them may still be harmful.

Topics include:

- familial love;
- obligation;
- upbringing;
- dysfunctional relationships;
- expectations;
- forgiveness;
- boundaries;
- role models;
- inherited behaviour;
- personal responsibility.

One recurring question is:

**At what point does someone's upbringing stop being an explanation for their behaviour and start becoming an excuse?**

The dialogue does not give a simple answer.

The character simultaneously acknowledges the influence of his upbringing and insists that adults eventually become responsible for deciding which behaviours they continue carrying forward.

---

# Relationships

The relationship branch became one of the deepest parts of the project.

It begins with jokes and sexual teasing but gradually moves into questions about:

- attraction;
- intimacy;
- trust;
- vulnerability;
- loneliness;
- abandonment;
- boundaries;
- compatibility;
- romantic expectations;
- self-protection;
- emotional dependence.

A major idea that emerged while writing this branch was the difference between **trust and predictability**.

The character often tries to understand people's behaviour by observing patterns.

The visitor can challenge whether this is genuine curiosity or simply another attempt to reduce uncertainty and avoid being hurt.

The dialogue can therefore turn against the avatar himself.

The visitor can accuse him of:

- manipulation;
- defensiveness;
- cynicism;
- hypocrisy;
- emotional avoidance;
- unrealistic expectations.

Sometimes he defends himself.

Sometimes he changes the framing.

Sometimes he admits that the criticism may be correct.

Sometimes he does not know.

That uncertainty is intentional.

---

# Slovenia

The Slovenia branch grew into the largest discussion of systems and society.

It includes conversations about:

- national identity;
- Slovenian culture;
- education;
- healthcare;
- economics;
- politics;
- technology;
- social media;
- demographic change;
- responsibility;
- individualism;
- generational differences.

These sections deliberately mix personal experience, observation, speculation and opinion.

They should therefore **not be interpreted as objective political, historical or economic analysis**.

They represent what this character notices, believes, misunderstands, questions or worries about.

The visitor is often given responses that question those assumptions.

This was important because I did not want controversial ideas to be presented simply because the author wrote them.

They belong inside the dialogue where they can be challenged.

---

# Personal experience and fiction

`break_down` occupies an unusual space between autobiography and fiction.

The avatar is based heavily on me.

Many experiences, values, doubts and observations originate from my real life.

At the same time, this is still a constructed character placed inside a fictional scenario.

Dialogue is edited for:

- pacing;
- humour;
- conflict;
- narrative structure;
- thematic exploration.

The character can therefore exaggerate, simplify, contradict himself or express an idea more sharply than I would in an ordinary conversation.

I think this distinction is important.

The project is not meant to be a factual database containing my permanent opinions.

It is closer to an interactive self-portrait created at a particular stage of my life.

---

# The visitor is also a character

One thing I gradually realized while writing `break_down` was that the visitor is not neutral.

Every available answer implies something about the person selecting it.

For example, the visitor can choose to respond to vulnerability with:

- empathy;
- scepticism;
- humour;
- hostility;
- curiosity;
- moral judgement.

This means that choices do more than unlock content.

They allow the visitor to partially define **their own role in the conversation**.

The project therefore becomes slightly reciprocal.

The visitor is trying to understand Jakob, while their choices reveal something about how they approach Jakob.

---

# Tone

The dialogue moves deliberately between several tones.

## Dark humour

Serious subjects are frequently interrupted by sarcasm, absurdity or inappropriate jokes.

Part of this is simply the character's personality.

It also prevents hundreds of nodes dealing with difficult topics from turning into one continuous serious monologue.

## Argument

The visitor is frequently allowed to push back.

This introduces tension and prevents the avatar from becoming an unquestioned narrator.

## Vulnerability

Some branches gradually move away from jokes and arguments toward personal experiences and uncertainty.

The contrast makes vulnerability more meaningful because the character does not begin by immediately revealing everything.

## Self-criticism

The avatar is not written to always win arguments.

Several branches allow him to recognize:

- contradictions;
- mistakes;
- harmful behaviour;
- uncertainty;
- gaps in his understanding.

For me, that became one of the most important characteristics of the project.

A believable self-portrait should include the possibility that the portrait is wrong about itself.

---

# Recurring themes

Although individual branches discuss very different subjects, several themes repeatedly connect them.

## Human connection

The dialogue repeatedly returns to belonging, friendship, family, love and loneliness.

Even discussions about society or work eventually tend to return to people.

## Responsibility

Another recurring question is how much responsibility someone carries for:

- their actions;
- their beliefs;
- their relationships;
- their circumstances;
- damage caused by earlier versions of themselves.

## Identity

The character repeatedly asks which parts of him were inherited and which were deliberately constructed.

## Uncertainty

The dialogue rarely offers absolute certainty.

The character often uses questions rather than conclusions.

## Control

Several branches explore attempts to control:

- emotions;
- relationships;
- risk;
- the future;
- other people's perceptions;
- one's own identity.

## Being wrong

One of the recurring values throughout the project is the idea that being wrong should not automatically be experienced as humiliation.

Changing an opinion can represent growth rather than defeat.

---

# Content note

`break_down` contains mature and personal material.

Depending on the path chosen, the dialogue may discuss:

- death;
- suicide and suicidal behaviour;
- depression;
- psychiatric treatment;
- family dysfunction;
- emotional neglect;
- abuse;
- violence;
- addiction;
- loneliness;
- sexuality;
- difficult relationships;
- political and social opinions.

Some branches become considerably heavier than the opening suggests.

The visitor generally has the option to avoid or leave many of these conversations.

The project does not present these subjects as universal truths or professional psychological advice.

They are parts of a fictionalized autobiographical narrative.

---

# Tools

## Web development

- HTML
- CSS
- JavaScript
- JSON

## Creative work

- branching narrative design
- creative writing
- character writing
- digital illustration
- interface design
- environmental design
- visual storytelling

No website template or interactive-fiction framework was used for the original implementation.

---

# What I created myself

One reason `break_down` matters to me is that almost every layer of the project required a different skill.

I created:

- the original concept;
- the post-apocalyptic setting;
- the narrative;
- the dialogue;
- the visitor responses;
- the branching structure;
- the JSON data structure;
- the JavaScript interaction;
- the interface;
- the avatar;
- the environmental artwork;
- the television design;
- the visual style.

Instead of specializing in one component and importing everything else, I wanted to experience what it was like to build a small interactive world from an idea into something another person could actually explore.

---

# Technical and narrative challenges

## The dialogue became a graph

A branching conversation stops behaving like ordinary writing surprisingly quickly.

Every response creates another path.

Those paths can:

- continue forward;
- reconnect;
- terminate;
- return to a previous topic;
- cross into another subject.

This forced me to think about the narrative partly as a **graph** rather than only as prose.

---

## Scope grows exponentially

One response can create three questions.

Three questions can create nine more.

Those can create another twenty.

This became one of the largest challenges in the project.

The problem was no longer finding something to write.

It was deciding **when to stop branching**.

---

## Node naming

Early in development, I used increasingly long hierarchical IDs such as:

`romance111111...`

This made sense when the tree was small because the ID visually represented its location in the branch.

At larger scale, however, this system becomes difficult to read and maintain.

A future version should replace these IDs with clearer semantic identifiers or automatically generated IDs.

---

## Large JSON structure

The narrative currently exists primarily inside one large JSON structure.

This makes it simple for the website to load, but increasingly difficult for a human to maintain.

Potential future approaches include:

- separate files for major topics;
- automated validation;
- a visual dialogue editor;
- graph visualization;
- scripted node generation and checking.

---

# Current limitations

## Limited state

The current system mainly responds to the visitor's immediate choice.

It does not yet build a detailed model of previous behaviour.

In a more advanced version, earlier choices could influence later responses.

For example, Jakob could remember whether the visitor had generally been:

- sympathetic;
- hostile;
- curious;
- dismissive.

That would make the conversation feel more continuous.

---

## Terminal branches

A large number of nodes currently end without another response.

Some are intentional conclusions.

Others exist because the tree grew faster than navigation was designed.

Future versions could provide more consistent:

- return options;
- conversation history;
- backtracking;
- endings.

---

## Editing consistency

The dialogue was written gradually over a long period.

As a result, some older and newer sections differ in:

- grammar;
- tone;
- pacing;
- depth;
- writing quality.

I intend to edit older branches while trying not to remove the personality that made the dialogue interesting in the first place.

---

## Accessibility

The interface was designed around visual atmosphere first.

It still requires additional work regarding:

- keyboard navigation;
- screen readers;
- text scaling;
- colour contrast;
- mobile layouts;
- different aspect ratios.

---

# What I learned

`break_down` taught me lessons very different from my scientific and data-analysis projects.

## Separating content from logic

Moving the dialogue into JSON separated **what the character says** from **how the application displays it**.

That made the content easier to modify without rewriting the interface.

---

## Thinking in systems

The project began as creative writing but gradually became a system containing:

- states;
- transitions;
- branches;
- dependencies;
- dead ends;
- shared nodes.

Writing and programming started influencing each other.

---

## Narrative design

A good individual line does not automatically create a good interactive conversation.

I had to think about:

- what questions a visitor would logically ask next;
- how much information to reveal;
- whether a branch should deepen or return;
- how quickly tone should change;
- whether different visitor attitudes receive meaningful responses.

---

## Interface and narrative are connected

The television is not only a visual decoration.

It establishes distance between the character and visitor, supports the apocalyptic setting and gives the conversation a physical place inside the fictional world.

This project taught me that interface design can become part of storytelling.

---

## Technical constraints can improve creative work

JSON and JavaScript force a conversation into clear structures.

Creative writing constantly tries to escape those structures.

Working between those two pressures made me think differently about both programming and writing.

---

## Maintaining complexity

With more than 800 nodes, even a personal project requires organization.

I learned that something can work technically while still becoming difficult to maintain.

That distinction became increasingly obvious as the dialogue expanded.

---

## Knowing when to stop

This may have been the most practical lesson.

There is always:

- another branch to write;
- another drawing to improve;
- another animation to add;
- another sentence to rewrite.

If every component had to be perfect, the project would never reach a usable version.

Finishing a version and improving it later is different from abandoning quality.

---

# Possible future improvements

I would like to continue developing `break_down` by:

- splitting the dialogue into smaller files;
- replacing hierarchical node names with cleaner IDs;
- creating automated dialogue validation;
- generating a visual graph of the narrative;
- adding conversation history;
- adding backtracking;
- remembering earlier visitor choices;
- allowing earlier choices to affect later dialogue;
- creating multiple endings;
- improving mobile responsiveness;
- improving accessibility;
- editing older dialogue branches;
- adding subtle CRT animations;
- expanding environmental interaction;
- adding original ambient audio or music;
- introducing save/resume functionality;
- creating clearer transitions between major topics.

---

# Why this project is in my portfolio

`break_down` is very different from my scientific and data-analysis projects.

That is exactly why I keep it here.

Those projects demonstrate how I approach structured data, statistics and scientific questions.

`break_down` demonstrates a different kind of problem solving.

I started with an abstract idea and had to combine:

**writing + programming + illustration + interface design + narrative structure**

until the idea became something another person could interact with.

The result is imperfect, personal and much larger than I expected when I began it.

It probably represents my preferred way of learning better than any polished tutorial project could:

**make something, let it become complicated, understand why it became complicated, and then make it better.**
