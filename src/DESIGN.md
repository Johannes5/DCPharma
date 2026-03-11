# MultiSearch — Plastic 3D Design System

**Two files define the whole system: `styles.css` (tokens) + this file (patterns).**
Copy both into any project and the components below can be reproduced exactly.

---

## Philosophy

Every element is physically raised or recessed — no flat surfaces. Depth comes entirely from multi-layer `box-shadow` custom properties that auto-adapt per theme. Hover lifts (`-translate-y-px`), active presses down. Primary and destructive buttons add a top→bottom gradient overlay for extra dimension.

---

## Setup

```
@import 'tailwindcss';          /* Tailwind v4 */
/* then paste the full styles.css content */
```

Activate a theme by setting classes on `<html>`:

| Theme | Class on `<html>` |
|-------|-------------------|
| White (default) | *(none)* |
| Dark | `dark` |
| Grey (dark variant) | `dark grey` |
| Tan | `tan` |

Accent colour: `data-accent="ocean|forest|sunset|cherry|violet|blue"` on `<html>`.
`ocean` is the default and needs no attribute.

---

## Shadow Tokens

All live in `styles.css` as CSS custom properties. Use them in Tailwind arbitrary syntax.

### Elevation (outset — elements feel raised)
```
shadow-[var(--shadow-xs)]    /* subtle lift: icon buttons, badges */
shadow-[var(--shadow-sm)]    /* small: inactive cards, secondary buttons */
shadow-[var(--shadow-md)]    /* medium: active destination cards */
shadow-[var(--shadow-lg)]    /* large: hover state of active cards */
shadow-[var(--shadow-xl)]    /* dialogs, popovers */
shadow-[var(--shadow-btn)]          /* button default */
shadow-[var(--shadow-btn-hover)]    /* button hover */
shadow-[var(--shadow-btn-active)]   /* button pressed */
```

### Inset wells (elements feel carved in)
> **Gotcha:** Tailwind's `shadow-[var(...)]` puts the value in the outset slot.
> For inset shadows use **inline style** instead:

```jsx
/* Regular well — inputs, recessed panels */
style={{ boxShadow: 'var(--shadow-inset-well)' }}

/* Deep well — browse slot, deeply recessed textareas */
style={{ boxShadow: 'var(--shadow-inset-well-deep)' }}
```

---

## Components

### Button

Base classes (apply to every button):
```
inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm
font-medium transition-all duration-150 focus-visible:outline-none
focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
disabled:pointer-events-none disabled:opacity-50
```

Variant classes (append to base):

**Primary** — raised 3D, gradient overlay:
```
bg-primary
[background-image:linear-gradient(to_bottom,hsl(0_0%_100%/10%),hsl(0_0%_0%/6%))]
text-primary-foreground
shadow-[var(--shadow-btn)]
hover:bg-primary/90 hover:shadow-[var(--shadow-btn-hover)] hover:-translate-y-px
active:shadow-[var(--shadow-btn-active)] active:translate-y-0
active:[background-image:linear-gradient(to_bottom,hsl(0_0%_0%/4%),hsl(0_0%_0%/10%))]
```

**Secondary:**
```
bg-secondary text-secondary-foreground shadow-[var(--shadow-sm)]
hover:bg-secondary/80 hover:shadow-[var(--shadow-md)] hover:-translate-y-px
active:shadow-[var(--shadow-inner-sm)] active:translate-y-0
```

**Outline:**
```
border border-input bg-background shadow-[var(--shadow-sm)]
hover:bg-accent hover:text-accent-foreground hover:shadow-[var(--shadow-md)] hover:-translate-y-px
active:shadow-[var(--shadow-inner-sm)] active:translate-y-0
```

**Destructive** — same pattern as Primary with `bg-destructive text-destructive-foreground`.

**Ghost:** `hover:bg-accent hover:text-accent-foreground hover:shadow-[var(--shadow-xs)]`

**Link:** `text-primary underline-offset-4 hover:underline`

Sizes: `h-9 rounded-md px-3` (sm) · `h-10 px-4 py-2` (default) · `h-11 rounded-md px-8` (lg) · `h-10 w-10` (icon)

---

### Destination Card

The section wrapper (`from-card to-card/80`) has a white gradient in light mode; cards must use `bg-secondary` (grey) to be visible against it. In dark themes `bg-card` is already distinct.

**Section wrapper:**
```
relative rounded-xl bg-gradient-to-b from-card to-card/80
border border-border/50 shadow-[var(--shadow-card)]
```

**Card — active (white/light mode):**
```
group relative rounded-lg overflow-hidden transition-colors duration-200
bg-secondary border-l-[3px] border-l-primary border border-border
shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)]
```

**Card — active (dark modes):**  replace `bg-secondary` with `bg-card`.

**Card — inactive:** replace active classes with:
```
bg-secondary/60   /* or bg-card/60 in dark */
border-l-[3px] border-l-border border border-border/60
opacity-60 hover:opacity-90 shadow-[var(--shadow-sm)]
```

**Favicon container (active):**
```
relative flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center
border bg-popover border-border shadow-[var(--shadow-xs)]
```

**Status pill (active):**
```
flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all
bg-primary/10 text-primary hover:bg-primary/20 shadow-[var(--shadow-xs)]
```

**Round delete button** (revealed on hover):
```
absolute top-2 right-2 z-10 h-6 w-6 rounded-full
flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all
bg-background/90 hover:bg-destructive hover:text-destructive-foreground
border border-border/50 shadow-[var(--shadow-sm)]
```

---

### Browse Slot (add-destination well)

Transparent background — shows the section wrapper's colour through. Uses deep inset shadow.

```jsx
<button
  className="group/slot relative rounded-xl overflow-hidden cursor-pointer
             transition-colors duration-200 border-2 border-dashed border-border"
  style={{ boxShadow: 'var(--shadow-inset-well-deep)' }}
>
  {/* hover overlay */}
  <div className="absolute inset-0 bg-transparent group-hover/slot:bg-secondary/30 transition-colors duration-200" />
  {/* content */}
</button>
```

---

### "Open Destinations" Compound Widget

Primary button fused with an auto-copy switch. The switch compartment is deliberately darkened.

```jsx
<div className="flex items-stretch rounded-lg overflow-hidden shadow-[var(--shadow-btn)] bg-primary">
  {/* Left: switch compartment */}
  <div className="flex items-center justify-center px-3 bg-black/40 border-r border-black/25 self-stretch">
    <Switch />
  </div>
  {/* Right: open button — suppress gradient since container already has bg-primary */}
  <button className="... [background-image:none]">Open N Destinations</button>
</div>
```

---

## Keyboard shortcut badge (on cards)

```
absolute -top-1 -left-1 z-10 opacity-0 group-hover/open:opacity-100 transition-all
inline-flex items-center justify-center h-5 min-w-5 px-1
text-[10px] font-mono font-bold rounded
bg-gradient-to-b from-secondary to-secondary/80 border border-border
shadow-[0_2px_0_0_hsl(var(--shadow-color)/15%),inset_0_1px_0_0_hsl(0_0%_100%/20%)]
text-secondary-foreground
```
