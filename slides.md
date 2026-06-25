---
theme: default
title: Data Analysis Using Python | Lists & Arrays
info: |
   ## Lecture 2 on Advanced Maths, Lists and Arrays
class: text-center
css: unocss
drawings:
  persist: false
transition: slide-up | slide-down
favicon: "/favicon-dark.png"
mdc: true
comark: true
navigation: false
selectable: false
presenter: false
duration: 120 mins
addons:
  - slidev-addon-python-runner
  - stem
  - window-mockup
  - fancy-arrow
python:
  installs: ["numpy", "pandas"]
  alwaysReload: false
  suppressDeprecationWarnings: true
id: 1
---
<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" color="#93c5fd" :starCount="800" :twinkleSpeed="0.005" :moonCycleSpeed="0.004" :moonSize="55" />


# Data Analysis Using Python
<span class='text-xs'> *by* </span> <br>
<span class="font-display">Harsh Jinger</span>
## Lists and Arrays
<div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10">
  Let's Begin <carbon:arrow-right />
</div>


---
transition: slide-up
level: 2
class: text-center
id: 2
---
<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" color="#93c5fd" :starCount="300" :twinkleSpeed="0.001" :moonCycleSpeed="0.003" :moonSize="55" />


## Environment Setup

<p class="text-lg text-blue-200/80 max-w-xl mx-auto mt-1 mb-6 leading-relaxed">
  Open your command line (<strong>Terminal</strong> on Mac, <strong>Anaconda Powershell Prompt</strong> on Windows):
</p>

<div class="max-w-3xl mx-auto bg-[#0d1117] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden text-left font-mono">
  <div class="bg-[#161b22] px-5 py-3 flex items-center justify-between border-b border-slate-700/60 text-xs text-slate-400">
    <div class="flex items-center gap-2.5">
      <div class="w-3 h-3 rounded-full bg-rose-500/80"></div>
      <div class="w-3 h-3 rounded-full bg-amber-500/80"></div>
      <div class="w-3 h-3 rounded-full bg-emerald-500/80"></div>
    </div>
    <div class="tracking-widest uppercase font-sans opacity-60">Anaconda Environment</div>
    <div class="w-12"></div>
  </div>
  <div class="p-10 space-y-6 text-4xl tracking-tight">
    <div class="flex items-center gap-4 font-bold">
      <span class="text-emerald-400 select-none">❯</span>
      <span class="text-amber-300">conda activate</span>
      <span class="text-white">daup</span>
    </div>
    <div class="text-xl text-slate-500 pl-8 font-normal italic select-none">
      (daup) ~ $
    </div>
    <div class="flex items-center gap-4 font-bold pt-1">
      <span class="text-emerald-400 select-none">❯</span>
      <span class="text-cyan-300">spyder</span>
      <span class="text-white animate-pulse font-normal">_</span>
    </div>
  </div>
</div>

<p class="text-xs text-slate-500 mt-8 tracking-wider uppercase font-mono">
  Press Enter after each line
</p>

---
transition: slide-left
level: 2
id: 3
---
<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" color="#93c5fd" :starCount="300" :twinkleSpeed="0.002" :moonCycleSpeed="0.003" :moonSize="30" />

## What are Variables?

<p class="text-base mt-2 text-blue-200/70 tracking-wide leading-relaxed mb-8 max-w-2xl">
  Think of a variable as a <strong>labeled bucket</strong> residing in your computer’s memory. You drop data inside it, and attach a name tag to the outside.
</p>

<!-- Bucket 1: String (Pulled up to Y: 210 to close the awkward gap) -->
<v-drag pos="60,210,260,_">
  <div class="flex flex-col items-center justify-center p-5 bg-blue-950/40 border border-blue-400/30 rounded-2xl shadow-xl backdrop-blur cursor-move group">
    <div class="text-7xl mb-3 group-hover:-translate-y-2 transition-transform">🪣</div>
    <div class="bg-black/60 px-3 py-1.5 rounded border border-blue-400/30 font-mono text-blue-300 text-sm mb-3">
      label: player
    </div>
    <div class="font-mono text-3xl font-bold text-blue-400">
      "Harsh"
    </div>
  </div>
</v-drag>

<!-- Bucket 2: Integer -->
<v-drag pos="360,210,260,_">
  <div class="flex flex-col items-center justify-center p-5 bg-emerald-950/40 border border-emerald-400/30 rounded-2xl shadow-xl backdrop-blur cursor-move group">
    <div class="text-7xl mb-3 group-hover:-translate-y-2 transition-transform">🪣</div>
    <div class="bg-black/60 px-3 py-1.5 rounded border border-emerald-400/30 font-mono text-emerald-300 text-sm mb-3">
      label: score
    </div>
    <div class="font-mono text-4xl font-bold text-emerald-400">
      100
    </div>
  </div>
</v-drag>

<!-- Bucket 3: Float -->
<v-drag pos="660,210,260,_">
  <div class="flex flex-col items-center justify-center p-5 bg-rose-950/40 border border-rose-400/30 rounded-2xl shadow-xl backdrop-blur cursor-move group">
    <div class="text-7xl mb-3 group-hover:-translate-y-2 transition-transform">🪣</div>
    <div class="bg-black/60 px-3 py-1.5 rounded border border-rose-400/30 font-mono text-rose-300 text-sm mb-3">
      label: price
    </div>
    <div class="font-mono text-4xl font-bold text-rose-400">
      12.50
    </div>
  </div>
</v-drag>

---
transition: slide-up
level: 2
id: 4
---
<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" color="#93c5fd" :starCount="300" :twinkleSpeed="0.002" :moonCycleSpeed="0.003" :moonSize="30" />


## The Golden Rules of Naming

<p class="text-lg mt-1 text-blue-200/80 mb-8">
  Python is extremely strict about sticker labels. You must follow these three rules:
</p>

<div class="grid grid-cols-3 gap-6 max-w-5xl">
  
  <div v-click class="bg-red-950/20 border border-red-500/20 p-5 rounded-2xl flex flex-col justify-between shadow-xl">
    <div>
      <div class="text-3xl mb-2">1️⃣</div>
      <h3 class="text-2xl text-red-400 font-bold m-0 mb-2">No Starting Digits</h3>
      <p class="text-sm text-white/80 m-0 leading-relaxed">A variable name cannot begin with a number.</p>
    </div>
    <div class="mt-6 pt-4 border-t border-red-500/20 font-mono text-xl font-bold space-y-2.5 bg-black/60 -mx-5 -mb-5 p-4 rounded-b-2xl">
      <div class="text-red-400 flex items-center gap-3"><span>❌</span> <span>1st_choice</span></div>
      <div class="text-emerald-400 flex items-center gap-3"><span>✅</span> <span>choice_1</span></div>
    </div>
  </div>

  <div v-click class="bg-amber-950/20 border border-amber-500/20 p-5 rounded-2xl flex flex-col justify-between shadow-xl">
    <div>
      <div class="text-3xl mb-2">2️⃣</div>
      <h3 class="text-2xl text-amber-400 font-bold m-0 mb-2">Safe Symbols Only</h3>
      <p class="text-sm text-white/80 m-0 leading-relaxed">Use letters, numbers, and underscores. No spaces.</p>
    </div>
    <div class="mt-6 pt-4 border-t border-amber-500/20 font-mono text-xl font-bold space-y-2.5 bg-black/60 -mx-5 -mb-5 p-4 rounded-b-2xl">
      <div class="text-red-400 flex items-center gap-3"><span>❌</span> <span>my score</span></div>
      <div class="text-emerald-400 flex items-center gap-3"><span>✅</span> <span>my_score</span></div>
    </div>
  </div>

  <div v-click class="bg-blue-950/20 border border-blue-500/20 p-5 rounded-2xl flex flex-col justify-between shadow-xl">
    <div>
      <div class="text-3xl mb-2">3️⃣</div>
      <h3 class="text-2xl text-blue-400 font-bold m-0 mb-2">Case Sensitive</h3>
      <p class="text-sm text-white/80 m-0 leading-relaxed">Python treats upper and lower case as totally separate.</p>
    </div>
    <div class="mt-6 pt-4 border-t border-blue-500/20 font-mono text-lg font-bold bg-black/60 -mx-5 -mb-5 p-4 rounded-b-2xl flex flex-col justify-center items-center min-h-[96px]">
      <span class="text-blue-300 tracking-tight">data ≠ Data ≠ DATA</span>
      <span class="text-xs text-blue-200/50 font-sans font-normal mt-1">(3 different buckets)</span>
    </div>
  </div>

</div>

---
transition: slide-left
level: 2
id: 5
---
<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" color="#93c5fd" :starCount="300" :twinkleSpeed="0.003" :moonCycleSpeed="0.002" :moonSize="40" />


## What is a List?

<p class="text-lg text-blue-200/80 mt-1 mb-10 max-w-2xl leading-relaxed">
  A list is an <strong>ordered, changeable collection</strong> of items. Think of it as a labeled bookshelf where every single book is assigned a strict slot number called an <strong>Index</strong>.
</p>

<v-drag pos="130,220,150,_">
  <div class="bg-blue-950/90 border border-blue-400/50 rounded-lg p-3 text-center shadow-2xl select-none cursor-move flex flex-col justify-between h-40 group">
    <div class="text-xs font-mono bg-black/60 py-0.5 rounded text-blue-300 font-bold">index: [0]</div>
    <div class="font-mono font-bold text-2xl text-blue-200 group-hover:scale-110 transition-transform">"Harsh"</div>
    <div class="text-[9px] text-blue-300/40 uppercase tracking-widest">str</div>
  </div>
</v-drag>

<v-drag pos="310,220,150,_">
  <div class="bg-emerald-950/90 border border-emerald-400/50 rounded-lg p-3 text-center shadow-2xl select-none cursor-move flex flex-col justify-between h-40 group">
    <div class="text-xs font-mono bg-black/60 py-0.5 rounded text-emerald-300 font-bold">index: [1]</div>
    <div class="font-mono font-bold text-3xl text-emerald-200 group-hover:scale-110 transition-transform">25</div>
    <div class="text-[9px] text-emerald-300/40 uppercase tracking-widest">int</div>
  </div>
</v-drag>

<v-drag pos="490,220,150,_">
  <div class="bg-amber-950/90 border border-amber-400/50 rounded-lg p-3 text-center shadow-2xl select-none cursor-move flex flex-col justify-between h-40 group">
    <div class="text-xs font-mono bg-black/60 py-0.5 rounded text-amber-300 font-bold">index: [2]</div>
    <div class="font-mono font-bold text-3xl text-amber-200 group-hover:scale-110 transition-transform">98.6</div>
    <div class="text-[9px] text-amber-300/40 uppercase tracking-widest">float</div>
  </div>
</v-drag>

<v-drag pos="670,220,150,_">
  <div class="bg-purple-950/90 border border-purple-400/50 rounded-lg p-3 text-center shadow-2xl select-none cursor-move flex flex-col justify-between h-40 group">
    <div class="text-xs font-mono bg-black/60 py-0.5 rounded text-purple-300 font-bold">index: [3]</div>
    <div class="font-mono font-bold text-2xl text-purple-200 group-hover:scale-110 transition-transform">True</div>
    <div class="text-[9px] text-purple-300/40 uppercase tracking-widest">bool</div>
  </div>
</v-drag>

<div class="absolute left-[90px] right-[90px] top-[380px] h-3.5 bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 border-t border-amber-600/40 rounded-sm shadow-2xl pointer-events-none"></div>

<div class="absolute top-[410px] w-full text-center text-xs font-mono text-white/40 italic">
  *Python indices always start at 0, never 1. (Grab and drag books to re-order)*
</div>


---
transition: slide-up
level: 2
layout: two-cols
layoutClass: gap-10
id: 6
---
<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" color="#93c5fd" :starCount="300" :twinkleSpeed="0.002" :moonCycleSpeed="0.003" :moonSize="55" />

## Core List Methods

<p class="text-base text-blue-200/70 mt-1 mb-6 font-sans">
  Lists carry built-in tools to look up, take out, or flip data on the fly.
</p>

<div class="space-y-4 max-w-md pr-2 font-sans">
  <div class="bg-blue-950/20 border border-blue-500/20 p-3.5 rounded-xl shadow-lg">
    <div class="font-mono text-emerald-400 font-bold text-base mb-1">.index(item)</div>
    <div class="text-xs text-white/80 leading-relaxed">Locates the item and returns its exact index slot number.</div>
  </div>
  <div class="bg-blue-950/20 border border-blue-500/20 p-3.5 rounded-xl shadow-lg">
    <div class="font-mono text-emerald-400 font-bold text-base mb-1">.pop(index)</div>
    <div class="text-xs text-white/80 leading-relaxed">Plucks out and returns the item at that slot (defaults to the last item).</div>
  </div>
  <div class="bg-blue-950/20 border border-blue-500/20 p-3.5 rounded-xl shadow-lg">
    <div class="font-mono text-emerald-400 font-bold text-base mb-1">.reverse()</div>
    <div class="text-xs text-white/80 leading-relaxed">Flips the entire order of the bookshelf backwards permanently.</div>
  </div>
</div>

::right::

## Slicing & Attributes

<p class="text-base text-blue-200/70 mt-1 mb-6 font-sans">
  Grab specific sub-sections, or measure the collection's properties.
</p>

<div class="space-y-4 max-w-md pl-2 font-sans">
  <div class="bg-blue-950/20 border border-blue-500/20 p-3.5 rounded-xl shadow-lg">
    <div class="font-mono text-cyan-400 font-bold text-base mb-1">list[start : stop : step]</div>
    <div class="text-xs text-white/80 leading-relaxed">Slicing pulls a subset from <span class="text-amber-300 font-mono">start</span> up to (excluding) <span class="text-amber-300 font-mono">stop</span>.</div>
  </div>
  <div class="bg-emerald-950/20 border border-emerald-500/20 p-3.5 rounded-xl shadow-lg">
    <div class="font-mono text-emerald-400 font-bold text-base mb-1">len() & sum()</div>
    <div class="text-xs text-white/80 mb-2.5">Universal Python functions passed over the collection:</div>
    <div class="bg-black/60 p-3 rounded-lg border border-emerald-500/20 font-mono text-xs space-y-2">
      <div class="flex justify-between items-center text-emerald-300 font-bold"><span>len(my_list)</span> <span class="text-slate-400 text-[11px] font-normal font-sans">→ Returns count (4)</span></div>
      <div class="border-t border-emerald-500/15 pt-2 flex justify-between items-center text-emerald-300 font-bold"><span>sum(my_list)</span> <span class="text-slate-400 text-[11px] font-normal font-sans">→ Adds total sum</span></div>
    </div>
  </div>
</div>

---
transition: slide-up
id: 7
---
<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" color="#93c5fd" :starCount="300" :twinkleSpeed="0.003" :moonCycleSpeed="0.003" :moonSize="30" />

## Examples

````md magic-move {lines:true}
```py
# Finding Index
fruits = ["apple", "banana", "cherry"]
print(fruits.index("banana"))

# Deleting an Item
stack = ["A", "B", "C", "D", "E"]
stack.pop(2)
print(stack)


# Reversing a List
tasks = ["Eat", "Sleep", "Code"]
tasks.reverse()
print(tasks)

# Number of Items
items = ["pen", "book", "bag"]
print(len(items))

```
```py
# Finding Index
fruits = ["apple", "banana", "cherry"]
print(fruits.index("apple"))

# Deleting an Item
stack = ["A", "B", "C", "D", "E"]
stack.pop(1)
print(stack)


# Reversing a List
tasks = ["Eat", "Sleep", "Code"]
tasks.reverse()
print(tasks)

# Total Value of Items
numbers = [3647, 3029, 30]
print(sum(numbers))
```
````

---
transition: slide-down
id: 8
---
<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" color="#93c5fd" :starCount="300" :twinkleSpeed="0.002" :moonCycleSpeed="0.003" :moonSize="50" />


# Live Python Programming

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>



```python {monaco-run}
# Finding Index
fruits = ["apple", "banana", "cherry"]
print(fruits.index("banana"))

# Deleting an Item
stack = ["A", "B", "C", "D", "E"]
stack.pop(2)
print(stack)


# Reversing a List
tasks = ["Eat", "Sleep", "Code"]
tasks.reverse()
print(tasks)

# Number of Items
items = ["pen", "book", "bag"]
print(len(items))
```

---
transition: slide-up
id: 9
---
<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" color="#93c5fd" :starCount="500" :twinkleSpeed="0.003" :moonCycleSpeed="0.003" :moonSize="50" />
## Practice Problem 1: The Average
<p class="text-lg text-blue-200/80">Calculate the average of the following list:</p>

```python
data = [10, 20, 30, 40, 50]
# Hint: use sum() and len()
```

$$
data = [10,20,30,40,50]
$$

```py {monaco-run}
data = [10, 20, 30, 40, 50]
average = sum(data) / len(data)
print(f"The average is: {average}")
```

---
transition: slide-up
id: 10
---
<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" color="#93c5fd" :starCount="500" :twinkleSpeed="0.003" :moonCycleSpeed="0.003" :moonSize="50" />


## Practice Problem 2: Index Hunt
<p class="text-lg text-blue-200/80">Print the first and the last element of the list:</p>

```python
items = ["Apple", "Banana", "Cherry", "Date"]
```

<div class="h-24"></div>


```py {monaco-run}
items = ["Apple", "Banana", "Cherry", "Date"]
# Print first (index 0) and last (index -1)
print(f"First: {items[0]}")
print(f"Last: {items[-1]}")
```

---
transition: slide-up
id: 11
---
<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" color="#93c5fd" :starCount="500" :twinkleSpeed="0.003" :moonCycleSpeed="0.002" :moonSize="40" />



## Practice Problem 3: Update & Replace
<p class="text-lg text-blue-200/80">
  Remove the language <code class="text-amber-300">"Python"</code> from the end of this list, append the language <code class="text-emerald-300">"Julia"</code>, and then print the updated list.
</p>

```python
langs = ["C", "Java", "Python"]
```

<div class='h-32'></div>

```py {monaco-run}
langs = ["C", "Java", "Python"]

# 1. Remove "Python" from the end
langs.pop()

# 2. Append "Julia"
langs.append("Julia")

print(f"Updated languages: {langs}")
```

---
transition: slide-up
id: 12
---
<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" color="#93c5fd" :starCount="400" :twinkleSpeed="0.002" :moonCycleSpeed="0.003" :moonSize="50" />

## Practice Problem 4: Index Tracking
<p class="text-lg text-blue-200/80">
  Find and print the exact index position of the item <code class="text-purple-300">"Laptop"</code> within this list configuration.
</p>

```python
inventory = ["Pen", "Book", "Laptop", "Bag"]
```

<div class='h-24'></div>

```
inventory = ["Pen", "Book", "Laptop", "Bag"]

# Locate the index of "Laptop"
target_index = inventory.index("Laptop")

print(f"Laptop is located at index: {target_index}")
```
---
transition: slide-left
id: 13
---
<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" color="#93c5fd" :starCount="500" :twinkleSpeed="0.003" :moonCycleSpeed="0.003" :moonSize="50" />


## Practice Problem 5: The Advanced Challenge
<p class="text-lg text-blue-200/80">
  Reverse this data list in-place, drop the item that lands at index 0 <em>after</em> the reversal, and then compute the final remaining vector sum mathematically.
</p>

```python
points = [5, 25, 10, 50, 15]
```

<div class="h-12"></div>


```py {monaco-run}
points = [5, 25, 10, 50, 15]

# 1. Flip the sequence in-place
points.reverse()  # Becomes: [15, 50, 10, 25, 5]

# 2. Remove the element currently sitting at index 0 (15)
points.pop(0)     # Becomes: [50, 10, 25, 5]

# 3. Aggregate the final mathematical sum
final_sum = sum(points)

print(f"Remaining elements: {points}")
print(f"Calculated aggregate sum: {final_sum}")  # Expected output: 90
```

---
transition: slide-down
id: 14
class: text-center
---
<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" color="#93c5fd" :starCount="500" :twinkleSpeed="0.001" :moonCycleSpeed="0.002" :moonSize="50" />

<h2 class="text-5xl font-semibold mb-12 text-white">Break & Attendance</h2>

<div class="grid grid-cols-2 gap-x-12 items-center justify-center max-w-3xl mx-auto">
  
  <div class="flex justify-end pr-4">
    <div class="border border-red-500/20 bg-black/30 p-4 rounded-2xl backdrop-blur-sm shadow-xl">
      <img src="/at.png" class="h-56 w-auto rounded-lg object-contain" alt="Attendance Link" />
    </div>
  </div>

  <div class="flex flex-col items-start justify-center pl-4 text-left">
    <div class="px-8 py-4 bg-red-950/40 border border-red-500/20 rounded-xl font-mono text-5xl font-bold text-red-400 tracking-wider shadow-inner min-w-[200px] text-center">
      <div v-if="timeLeft > 0" class="flex justify-center items-center">
        <span v-text="minutes"></span>:<span v-text="seconds < 10 ? '0' + seconds : seconds"></span>
      </div>
      <span v-else class="text-white animate-pulse text-3xl">Time's Up!</span>
    </div>
    <p class="text-sm text-red-400/60 mt-3 font-sans tracking-wide pl-2">Minutes remaining</p>
  </div>

</div>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const timeLeft = ref(600)
let timerInterval: any = null

const minutes = computed(() => Math.floor(timeLeft.value / 60))
const seconds = computed(() => timeLeft.value % 60)

onMounted(() => {
  timerInterval = setInterval(() => {
    if (timeLeft.value > 0) timeLeft.value--
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timerInterval)
})
</script>

<style>
.slidev-page {
  background-color: #1a0505 !important;
}
</style>

---
transition: slide-up
level: 2
class: text-center
id: 15
---
<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" color="#93c5fd" :starCount="100" :twinkleSpeed="0.002" :moonCycleSpeed="0.002" :moonSize="30" />



## Installing NumPy

<p class="text-lg text-blue-200/80 max-w-xl mx-auto mt-1 mb-6 leading-relaxed">
  Open your command line (<strong>Terminal</strong> on Mac, <strong>Anaconda Prompt</strong> on Windows):
</p>

<div class="max-w-3xl mx-auto bg-[#0d1117] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden text-left font-mono">
  <div class="bg-[#161b22] px-5 py-3 flex items-center justify-between border-b border-slate-700/60 text-xs text-slate-400">
    <div class="flex items-center gap-2.5">
      <div class="w-3 h-3 rounded-full bg-rose-500/80"></div>
      <div class="w-3 h-3 rounded-full bg-amber-500/80"></div>
      <div class="w-3 h-3 rounded-full bg-emerald-500/80"></div>
    </div>
    <div class="tracking-widest uppercase font-sans opacity-60">Anaconda Environment</div>
    <div class="w-12"></div>
  </div>
  <div class="p-10 space-y-6 text-4xl tracking-tight">
    <div class="flex items-center gap-4 font-bold">
      <span class="text-emerald-400 select-none">❯</span>
      <span class="text-amber-300">conda activate</span>
      <span class="text-white">daup</span>
    </div>
    <div class="text-xl text-slate-500 pl-8 font-normal italic select-none">
      (daup) ~ $USER
    </div>
    <div class="flex items-center gap-4 font-bold pt-1">
      <span class="text-emerald-400 select-none">❯</span>
      <span class="text-cyan-300">pip install numpy</span>
      <span class="text-white animate-pulse font-normal">_</span>
    </div>
  </div>
</div>

<p class="text-xs text-slate-500 mt-8 tracking-wider uppercase font-mono">
  Press Enter after each line
</p>

---
transition: slide-left
level: 2
id: 16
---

<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" color="#93c5fd" :starCount="300" :twinkleSpeed="0.003" :moonCycleSpeed="0.002" :moonSize="40" />

## What is an Array?

<p class="text-lg text-blue-100 font-medium mt-1 mb-6 max-w-2xl leading-relaxed">
  An N-dimensional matrix extends linear lists into grids or multi-dimensional spaces. Think of it as a <strong class="text-yellow-300">chessboard or checkerboard grid</strong> where every element is tracked by a precise coordinate pair of <strong class="text-yellow-300">Indices (Row, Column)</strong>.
</p>

<!-- Row 0, Col 0 (Saturated Indigo Theme) -->
<v-drag pos="180,180,140,_">
  <div class="bg-indigo-950/90 border-2 border-indigo-400/85 rounded-xl p-3 text-center shadow-[0_0_20px_rgba(99,102,241,0.3)] select-none cursor-move flex flex-col justify-between h-36 group transition-all duration-300 hover:border-indigo-300">
    <div class="text-xs font-mono bg-black/90 py-0.5 rounded text-indigo-300 font-extrabold border border-indigo-500/30">index: [0][0]</div>
    <div class="font-mono font-bold text-2xl text-cyan-300 group-hover:scale-115 transition-transform drop-shadow-[0_2px_8px_rgba(34,211,238,0.5)]">"Harsh"</div>
    <div class="text-[10px] text-indigo-400 font-extrabold uppercase tracking-widest">str</div>
  </div>
</v-drag>

<!-- Row 0, Col 1 (Saturated Emerald Theme) -->
<v-drag pos="338,179,140,_">
  <div class="bg-emerald-950/90 border-2 border-emerald-400/85 rounded-xl p-3 text-center shadow-[0_0_20px_rgba(16,185,129,0.3)] select-none cursor-move flex flex-col justify-between h-36 group transition-all duration-300 hover:border-emerald-300">
    <div class="text-xs font-mono bg-black/90 py-0.5 rounded text-emerald-300 font-extrabold border border-emerald-500/30">index: [0][1]</div>
    <div class="font-mono font-bold text-3xl text-yellow-300 group-hover:scale-115 transition-transform drop-shadow-[0_2px_8px_rgba(253,224,71,0.5)]">25</div>
    <div class="text-[10px] text-emerald-400 font-extrabold uppercase tracking-widest">int</div>
  </div>
</v-drag>

<!-- Row 0, Col 2 (Saturated Indigo Theme) -->
<v-drag pos="502,182,140,_">
  <div class="bg-indigo-950/90 border-2 border-indigo-400/85 rounded-xl p-3 text-center shadow-[0_0_20px_rgba(99,102,241,0.3)] select-none cursor-move flex flex-col justify-between h-36 group transition-all duration-300 hover:border-indigo-300">
    <div class="text-xs font-mono bg-black/90 py-0.5 rounded text-indigo-300 font-extrabold border border-indigo-500/30">index: [0][2]</div>
    <div class="font-mono font-bold text-3xl text-amber-300 group-hover:scale-115 transition-transform drop-shadow-[0_2px_8px_rgba(245,158,11,0.5)]">98.6</div>
    <div class="text-[10px] text-indigo-400 font-extrabold uppercase tracking-widest">float</div>
  </div>
</v-drag>

<!-- Row 1, Col 0 (Saturated Emerald Theme) -->
<v-drag pos="180,340,140,_">
  <div class="bg-emerald-950/90 border-2 border-emerald-400/85 rounded-xl p-3 text-center shadow-[0_0_20px_rgba(16,185,129,0.3)] select-none cursor-move flex flex-col justify-between h-36 group transition-all duration-300 hover:border-emerald-300">
    <div class="text-xs font-mono bg-black/90 py-0.5 rounded text-emerald-300 font-extrabold border border-emerald-500/30">index: [1][0]</div>
    <div class="font-mono font-bold text-2xl text-fuchsia-300 group-hover:scale-115 transition-transform drop-shadow-[0_2px_8px_rgba(240,46,170,0.5)]">True</div>
    <div class="text-[10px] text-emerald-400 font-extrabold uppercase tracking-widest">bool</div>
  </div>
</v-drag>

<!-- Row 1, Col 1 (Saturated Indigo Theme) -->
<v-drag pos="340,340,140,_">
  <div class="bg-indigo-950/90 border-2 border-indigo-400/85 rounded-xl p-3 text-center shadow-[0_0_20px_rgba(99,102,241,0.3)] select-none cursor-move flex flex-col justify-between h-36 group transition-all duration-300 hover:border-indigo-300">
    <div class="text-xs font-mono bg-black/90 py-0.5 rounded text-indigo-300 font-extrabold border border-indigo-500/30">index: [1][1]</div>
    <div class="font-mono font-bold text-3xl text-rose-300 group-hover:scale-115 transition-transform drop-shadow-[0_2px_8px_rgba(244,63,94,0.5)]">-12</div>
    <div class="text-[10px] text-indigo-400 font-extrabold uppercase tracking-widest">int</div>
  </div>
</v-drag>

<!-- Row 1, Col 2 (Saturated Emerald Theme) -->
<v-drag pos="500,340,140,_">
  <div class="bg-emerald-950/90 border-2 border-emerald-400/85 rounded-xl p-3 text-center shadow-[0_0_20px_rgba(16,185,129,0.3)] select-none cursor-move flex flex-col justify-between h-36 group transition-all duration-300 hover:border-emerald-300">
    <div class="text-xs font-mono bg-black/90 py-0.5 rounded text-emerald-300 font-extrabold border border-emerald-500/30">index: [1][2]</div>
    <div class="font-mono font-bold text-2xl text-teal-300 group-hover:scale-115 transition-transform drop-shadow-[0_2px_8px_rgba(20,184,166,0.5)]">"Data"</div>
    <div class="text-[10px] text-emerald-400 font-extrabold uppercase tracking-widest">str</div>
  </div>
</v-drag>

<div class="absolute top-[500px] w-full text-center text-sm font-semibold font-mono text-slate-200">
  *Matrix indices navigate using [row][column] structures.*
</div>

---
transition: slide-up
level: 2
layout: two-cols
layoutClass: gap-10
id: 17
---
<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" color="#93c5fd" :starCount="200" :twinkleSpeed="0.004" :moonCycleSpeed="0.002" :moonSize="30" />


## NumPy Array Methods

<p class="text-base text-blue-200/70 mt-1 mb-6 font-sans">
  Arrays carry optimized, compiled methods to inspect or mutate shape and structure instantly.
</p>

<div class="space-y-4 max-w-md pr-2 font-sans">
  <div class="bg-blue-950/20 border border-blue-500/20 p-3.5 rounded-xl shadow-lg">
    <div class="font-mono text-emerald-400 font-bold text-base mb-1">arr.ndim & arr.size</div>
    <div class="text-xs text-white/80 leading-relaxed">Returns total dimensions (axes) and total number of elements inside the array container.</div>
  </div>
  <div class="bg-blue-950/20 border border-blue-500/20 p-3.5 rounded-xl shadow-lg">
    <div class="font-mono text-emerald-400 font-bold text-base mb-1">arr.reshape(rows, cols)</div>
    <div class="text-xs text-white/80 leading-relaxed">Gives a new structural view to the data vector without mutating its underlying data memory footprint.</div>
  </div>
  <div class="bg-blue-950/20 border border-blue-500/20 p-3.5 rounded-xl shadow-lg">
    <div class="font-mono text-emerald-400 font-bold text-base mb-1">np.append(arr, values)</div>
    <div class="text-xs text-white/80 leading-relaxed">Returns a completely fresh, brand new mutated copy with elements appended along the target operational axis.</div>
  </div>
</div>

::right::

## Mathematical Formulae

<p class="text-base text-blue-200/70 mt-1 mb-6 font-sans">
  Execute lightning-fast vectorized aggregation functions across entire numerical matrices.
</p>

<div class="space-y-4 max-w-md pl-2 font-sans">
  <div class="bg-blue-950/20 border border-blue-500/20 p-3.5 rounded-xl shadow-lg">
    <div class="font-mono text-cyan-400 font-bold text-base mb-1">np.mean() & np.std()</div>
    <div class="text-xs text-white/80 leading-relaxed">Computes the statistical sample mean ($\mu$) and sample standard deviation ($\sigma$) natively in highly optimized C loops.</div>
  </div>
  <div class="bg-emerald-950/20 border border-emerald-500/20 p-3.5 rounded-xl shadow-lg">
    <div class="font-mono text-emerald-400 font-bold text-base mb-1">np.sum() & np.prod()</div>
    <div class="text-xs text-white/80 mb-2.5">Fast scalar reduction operations over array dimensional limits:</div>
    <div class="bg-black/60 p-3 rounded-lg border border-emerald-500/20 font-mono text-xs space-y-2">
      <div class="flex justify-between items-center text-emerald-300 font-bold"><span>np.sum(arr)</span> <span class="text-slate-400 text-[11px] font-normal font-sans">→ Sum of all items ($\sum x_i$)</span></div>
      <div class="border-t border-emerald-500/15 pt-2 flex justify-between items-center text-emerald-300 font-bold"><span>np.prod(arr)</span> <span class="text-slate-400 text-[11px] font-normal font-sans">→ Product of all items ($\prod x_i$)</span></div>
    </div>
  </div>
</div>


---
transition: slide-up
id: 18
---
<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" color="#93c5fd" :starCount="300" :twinkleSpeed="0.002" :moonCycleSpeed="0.002" :moonSize="55" />


## Array Examples

````md magic-move {lines:true}

```py
import numpy as np

# Example 1: Dimensions & Reshaping
arr = np.array([1, 2, 3, 4, 5, 6])
print(arr.ndim)          # Output: 1 (1D array)
matrix = arr.reshape(2, 3) 
print(matrix)            # 2 rows, 3 columns

# Example 1: Mutating with Append
vector = np.array([10, 20])
updated = np.append(vector, [30, 40])
print(updated)           # [10, 20, 30, 40]

# Example 1: Statistical Summary (Mean & Std)
scores = np.array([85, 90, 78, 92])
print(np.mean(scores))   # Output: 86.25
print(np.std(scores))    # Output: 5.67

# Example 1: Aggregations (Sum & Prod)
data = np.array([1, 2, 3, 4])
print(np.sum(data))      # Output: 10
print(np.prod(data))     # Output: 24
```

```py
import numpy as np

# Example 2: Dimensions & Reshaping
arr = np.array([[1, 2], [3, 4], [5, 6]])
print(arr.size)          # Output: 6 (Total elements)
flat = arr.reshape(6)    
print(flat)              # Flattens back to 1D array

# Example 2: Mutating with Append
matrix = np.array([[1, 2], [3, 4]])
updated = np.append(matrix, [[5, 6]], axis=0)
print(updated)           # Appends a brand new row

# Example 2: Statistical Summary (Mean & Std)
temps = np.array([32.5, 31.0, 34.2, 33.1])
print(np.mean(temps))    # Output: 32.7
print(np.std(temps))     # Standard deviation of float data

# Example 2: Aggregations (Sum & Prod)
multipliers = np.array([5, 10, 2])
print(np.sum(multipliers))  # Output: 17
print(np.prod(multipliers)) # Output: 100
```
````

---
transition: slide-right
id: 19
---
<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" color="#93c5fd" :starCount="200" :twinkleSpeed="0.004" :moonCycleSpeed="0.001" :moonSize="40" />


# Live Python Programming

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

```py {monaco-run}
import numpy as np

# Example 1: Dimensions & Reshaping
arr = np.array([1, 2, 3, 4, 5, 6])
print(arr.ndim)          # Output: 1 (1D array)
matrix = arr.reshape(2, 3) 
print(matrix)            # 2 rows, 3 columns

# Example 1: Mutating with Append
vector = np.array([10, 20])
updated = np.append(vector, [30, 40])
print(updated)           # [10, 20, 30, 40]

# Example 1: Statistical Summary (Mean & Std)
scores = np.array([85, 90, 78, 92])
print(np.mean(scores))   # Output: 86.25
print(np.std(scores))    # Output: 5.67

# Example 1: Aggregations (Sum & Prod)
data = np.array([1, 2, 3, 4])
print(np.sum(data))      # Output: 10
print(np.prod(data))     # Output: 24
```


---
transition: slide-up
id: 20
---
<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" color="#93c5fd" :starCount="500" :twinkleSpeed="0.003" :moonCycleSpeed="0.003" :moonSize="50" />


## Practice Problem 1
<p class="text-lg text-blue-200/80">Convert the list into an array and find the average revenue.</p>

```python
revenue = [12000, 15000, 11000, 18000, 20000, 19000]
```

$$
revenue = [12000, 15000, 11000, 18000, 20000, 19000]
$$

```py {monaco-run}
import numpy as np
revenue = np.array([12000, 15000, 11000, 18000, 20000, 19000])

avg_rev = np.mean(revenue)
print("Mean Revenue:", avg_rev)
```


---
transition: slide-up
id: 21
---
<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" color="#93c5fd" :starCount="500" :twinkleSpeed="0.003" :moonCycleSpeed="0.003" :moonSize="50" />


## Practice Problem 2
<p class="text-lg text-blue-200/80">Square all the values in the list of factors using numpy method.</p>

```python
factors = [2, 4, 6, 8]
```

$$
factors = [2, 4, 6, 8]
$$

```py {monaco-run}
import numpy as np
factors = np.array([2, 4, 6, 8])

# Squaring all elements
squared_factors = np.square(factors) # or factors**2
print("Projected Growth:", squared_factors)
```


---
transition: slide-up
id: 22
---
<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" color="#93c5fd" :starCount="500" :twinkleSpeed="0.003" :moonCycleSpeed="0.003" :moonSize="50" />


## Practice Problem 3
<p class="text-lg text-blue-200/80">Find the volatility (Standard Deviation) if the price of the stock is given below.</p>

```python
prices = [150.20, 155.50, 148.90, 162.00, 153.40]
```

$$
prices = [150.20, 155.50, 148.90, 162.00, 153.40]
$$

```py {monaco-run}
import numpy as np
prices = np.array([150.20, 155.50, 148.90, 162.00, 153.40])

volatility = np.std(prices)
print("Stock Volatility (Std Dev):", volatility)
```

---
transition: slide-up
id: 23
---
<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" color="#93c5fd" :starCount="500" :twinkleSpeed="0.003" :moonCycleSpeed="0.003" :moonSize="50" />


## Practice Problem 4
<p class="text-lg text-blue-200/80">Find the median salary from the list of salaries and compare it with the mean.</p>

```python
salaries = [45000, 50000, 52000, 48000, 500000]
```

$$
salaries = [45000, 50000, 52000, 48000, 500000]
$$

```py {monaco-run}
import numpy as np
salaries = np.array([45000, 50000, 52000, 48000, 500000])

med_salary = np.median(salaries)
print("Median Salary:", med_salary)
print("Compare with Mean:", np.mean(salaries))
```

---
transition: slide-up
id: 24
---
<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" color="#93c5fd" :starCount="500" :twinkleSpeed="0.003" :moonCycleSpeed="0.003" :moonSize="50" />


## Practice Problem 5
<p class="text-lg text-blue-200/80">Calculate the income after deducting 15% tax from the profits listed below.</p>

```python
profits = [1000, 2500, 3800, 4200]
```

$$
profits = [1000, 2500, 3800, 4200]
$$

```py {monaco-run}
import numpy as np
profits = np.array([1000, 2500, 3800, 4200])

# Multiply by 0.85 to get post-tax amount
after_tax = profits * 0.85
print("Profits after 15% Tax:", after_tax)
```

---
transition: slide-up
id: 25
---
<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" color="#93c5fd" :starCount="500" :twinkleSpeed="0.003" :moonCycleSpeed="0.003" :moonSize="50" />


## Practice Problem 6
<p class="text-lg text-blue-200/80">Calculate the total production of products A, B and C between January and March</p>

```python
import numpy as np
# Rows: Product A, Product B. Columns: Jan, Feb, Mar
sales_matrix = np.array([[100, 120, 110], 
                         [200, 230, 215]]
```

$$
sales\_matrix = \begin{bmatrix}
100 & 120 & 110\\
200 & 230 & 215
\end{bmatrix}
$$

```py {monaco-run}
import numpy as np
sales_matrix = np.array([[100, 120, 110], 
                         [200, 230, 215]])
total_sales = np.sum(sales_matrix)
print("Total Sales:", total_sales)
```

---
transition: slide-up
id: 26
---
<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" color="#93c5fd" :starCount="500" :twinkleSpeed="0.003" :moonCycleSpeed="0.003" :moonSize="50" />


## Practice Problem 7
<p class="text-lg text-blue-200/80">Find the matrix of production if production is predicted to increase by 25 for each region in the first two quarters of next year.</p>

```python
import numpy as np
# Each row is a Region, each column is a Quarter
regional_sales = np.array([[10, 20], [15, 25], [30, 40]])
```

$$
regional\_sales = \begin{bmatrix}
10 & 20 \\
15 & 25 \\
30 & 40
\end{bmatrix}
$$

```py {monaco-run}
import numpy as np
regional_sales = np.array([[10, 20], [15, 25], [30, 40]])

# Multiply the array with 1.25 for 25% increase. 
predicted_sales = regional_sales * 1.25
print("Predicted Sales Matrix:", predicted_sales)
```

---
transition: slide-up
id: 27
---
<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" color="#93c5fd" :starCount="500" :twinkleSpeed="0.003" :moonCycleSpeed="0.003" :moonSize="50" />


## Practice Problem 8
<p class="text-lg text-blue-200/80">Find the Range of the prices for a particular product in the inventory.</p>

```python
inventory_prices = [12.99, 45.00, 5.50, 120.00, 22.75]
```

$$
inventory_prices = [12.99, 45.00, 5.50, 120.00, 22.75]
$$

```py {monaco-run}
import numpy as np
inventory_prices = np.array([12.99, 45.00, 5.50, 120.00, 22.75])

price_range = np.max(inventory_prices) - np.min(inventory_prices)
print("The price spread is:", price_range)
```

---
layout: center
class: text-center
id: 28
---
<MathFrame v-if="$slidev.nav.currentPage === $frontmatter.id" color="#93c5fd" :starCount="600" :twinkleSpeed="0.004" :moonCycleSpeed="0.005" :moonSize="70" />

# Thank You
<span class='text-xs'> *Presented by* </span> <br>
<span class="font-display">Harsh Jinger</span>

## Data Analysis Using Python

<div @click="$slidev.nav.next" class="mt-12 py-1 text-xs opacity-40">
  End of Presentation
</div>
