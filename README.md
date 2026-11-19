# STRANGE AEONS

Author: Yannick Hantaniaina

> "That is not dead which can eternal lie,
> And with strange aeons even death may die."

## Description

Strange Aeons is a small top-down game inspired by H.P. Lovecraft's *The Call of Cthulhu*.

You are the entity that buried Cthulhu the first time. You forgot everything, including how you did it. Cthulhu's sailors still dream of him, and as long as they remember, he can wake when the stars align. Your goal is to make every sailor forget, then return to R'lyeh and bury him again.

### The world

The map is a polar grid of latitude rings and longitude lines over a dark field of stars. R'lyeh sits at the pole, in the center, where every line leads.

You are never drawn directly. You appear as a hole in the stars, and the grid lines bend toward you as you move.

### How to play

1. Sailors appear at random points on the map. Each run places them differently. Bigger points hold more sailors.
2. Move onto a point and its sailors start following you.
3. Lead them to one of the three memory shrines. There, they forget the call.
4. Once every sailor has forgotten, go to R'lyeh and bury Cthulhu.

R'lyeh is the closest point on the map, and going there early is a mistake. Sailors who still remember keep the call alive.

### Controls

| Key | Action |
|---|---|
| Arrow keys or WASD | Move |
| Any key | Start the game, continue after an ending |

### Sanity

Sanity drops as you get closer to R'lyeh and while you carry sailors, since they still hear the call. Each shrine visit restores some of it. As sanity drops, the world stops being reliable:

- The grid warps and wobbles.
- Fake sailor points appear. They vanish when you reach them.
- The shrines fade and become hard to find.

### Winning and losing

Around R'lyeh, the stars slowly move into alignment. A run lasts about 3 minutes.

- **Win:** every sailor has forgotten, and you reach R'lyeh before the stars align.
- **Lose:** you reach R'lyeh too early, your sanity runs out, or the stars align first.

Every lost run adds a tally mark to a monolith, and the marks stay between sessions. When you finally win, you carve the last mark yourself.

### Desired experience

The game should feel quiet, cold and uncertain. The player starts with no explanation and learns the rules by failing. Over many loops, they should start to doubt what the map shows them and realize they have done this many times before.

## Technical notes

| Tool | Use |
|---|---|
| JavaScript | Programming language |
| p5.js | Drawing, animation and input |
| HTML | Web page that runs the game |

## Attribution

- All visuals and other assets are original and made by me.
- This project uses [p5.js](https://p5js.org).
- The story and quotes come from *The Call of Cthulhu* by H.P. Lovecraft (1928), which is in the public domain. Text from Project Gutenberg: https://www.gutenberg.org/ebooks/68283
- The feeling of nothingness and the monolith were inspired by the game *Dawnfolk*.