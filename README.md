This is a joke.

* DogeCoin V2

or

* meta DogeCoin V2

DogeCoin V2 is a blockchain which is mined by posting arbitrary winning games for
a given TicTacToe position.

The amount of DogeCoin V2 is the discrete logarithm of the quantity of solved games.

It does not work with this NEAR Protocol internal error:

```
⠧ Building assemblyscript.js...
<--- Last few GCs --->

[2741041:0x3d73cd0]    35220 ms: Mark-sweep 2049.2 (2052.9) -> 2049.2 (2053.9) MB, 2715.5 / 0.0 ms  (average mu = 0.059, current mu = 0.001) allocation failure scavenge might not succeed
[2741041:0x3d73cd0]    37905 ms: Mark-sweep 2050.2 (2053.9) -> 2050.2 (2054.9) MB, 2684.1 / 0.0 ms  (average mu = 0.028, current mu = 0.001) allocation failure scavenge might not succeed


<--- JS stacktrace --->

==== JS stack trace =========================================

    0: ExitFrame [pc: 0x13c03d9]
    1: StubFrame [pc: 0x13fc80f]
Security context: 0x374da0dc08d1 <JSObject>
    2: replace [0x374da0dd63c1](this=0x2ae83a900119 <Very long string[4375354]>,0x29b48dfd6041 <JSRegExp <String[#611]: ((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(...

FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
 1: 0xa02f90 node::Abort() [/usr/local/stow/node-v12.16.2-linux-x64/bin/node]
 2: 0xa033b5 node::OnFatalError(char const*, char const*) [/usr/local/stow/node-v12.16.2-linux-x64/bin/node]
 3: 0xb76ffe v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [/usr/local/stow/node-v12.16.2-linux-x64/bin/node]
 4: 0xb77379 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [/usr/local/stow/node-v12.16.2-linux-x64/bin/node]
 5: 0xd23ad5  [/usr/local/stow/node-v12.16.2-linux-x64/bin/node]
 6: 0xd24166 v8::internal::Heap::RecomputeLimits(v8::internal::GarbageCollector) [/usr/local/stow/node-v12.16.2-linux-x64/bin/node]
 7: 0xd309e5 v8::internal::Heap::PerformGarbageCollection(v8::internal::GarbageCollector, v8::GCCallbackFlags) [/usr/local/stow/node-v12.16.2-linux-x64/bin/node]
 8: 0xd31895 v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [/usr/local/stow/node-v12.16.2-linux-x64/bin/node]
 9: 0xd3434c v8::internal::Heap::AllocateRawWithRetryOrFail(int, v8::internal::AllocationType, v8::internal::AllocationOrigin, v8::internal::AllocationAlignment) [/usr/local/stow/node-v12.16.2-linux-x64/bin/node]
10: 0xcfb3fe v8::internal::Factory::NewFixedArray(int, v8::internal::AllocationType) [/usr/local/stow/node-v12.16.2-linux-x64/bin/node]
11: 0x1062b06  [/usr/local/stow/node-v12.16.2-linux-x64/bin/node]
12: 0x1063fa8 v8::internal::Runtime_RegExpExecMultiple(int, unsigned long*, v8::internal::Isolate*) [/usr/local/stow/node-v12.16.2-linux-x64/bin/node]
13: 0x13c03d9  [/usr/local/stow/node-v12.16.2-linux-x64/bin/node]

<--- Last few GCs --->

[2740992:0x485daa0]    41440 ms: Mark-sweep 2048.6 (2052.9) -> 2048.6 (2053.9) MB, 2830.9 / 0.0 ms  (average mu = 0.075, current mu = 0.001) allocation failure scavenge might not succeed
[2740992:0x485daa0]    43186 ms: Mark-sweep 2049.5 (2053.9) -> 2049.5 (2054.9) MB, 1744.4 / 0.0 ms  (average mu = 0.047, current mu = 0.001) allocation failure scavenge might not succeed


<--- JS stacktrace --->

==== JS stack trace =========================================

    0: ExitFrame [pc: 0x13c03d9]
    1: StubFrame [pc: 0x13fc80f]
Security context: 0x145de63408d1 <JSObject>
    2: replace [0x145de63563c1](this=0x1e827c8c0119 <Very long string[4375354]>,0x1c375a7b4659 <JSRegExp <String[#611]: ((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(...

FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
 1: 0xa02f90 node::Abort() [/usr/local/stow/node-v12.16.2-linux-x64/bin/node]
 2: 0xa033b5 node::OnFatalError(char const*, char const*) [/usr/local/stow/node-v12.16.2-linux-x64/bin/node]
 3: 0xb76ffe v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [/usr/local/stow/node-v12.16.2-linux-x64/bin/node]
 4: 0xb77379 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [/usr/local/stow/node-v12.16.2-linux-x64/bin/node]
 5: 0xd23ad5  [/usr/local/stow/node-v12.16.2-linux-x64/bin/node]
 6: 0xd24166 v8::internal::Heap::RecomputeLimits(v8::internal::GarbageCollector) [/usr/local/stow/node-v12.16.2-linux-x64/bin/node]
 7: 0xd309e5 v8::internal::Heap::PerformGarbageCollection(v8::internal::GarbageCollector, v8::GCCallbackFlags) [/usr/local/stow/node-v12.16.2-linux-x64/bin/node]
 8: 0xd31895 v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [/usr/local/stow/node-v12.16.2-linux-x64/bin/node]
 9: 0xd3434c v8::internal::Heap::AllocateRawWithRetryOrFail(int, v8::internal::AllocationType, v8::internal::AllocationOrigin, v8::internal::AllocationAlignment) [/usr/local/stow/node-v12.16.2-linux-x64/bin/node]
10: 0xcfb3fe v8::internal::Factory::NewFixedArray(int, v8::internal::AllocationType) [/usr/local/stow/node-v12.16.2-linux-x64/bin/node]
11: 0x1062b06  [/usr/local/stow/node-v12.16.2-linux-x64/bin/node]
12: 0x1063fa8 v8::internal::Runtime_RegExpExecMultiple(int, unsigned long*, v8::internal::Isolate*) [/usr/local/stow/node-v12.16.2-linux-x64/bin/node]
13: 0x13c03d9  [/usr/local/stow/node-v12.16.2-linux-x64/bin/node]
Aborted (core dumped)
npm ERR! code ELIFECYCLE
npm ERR! errno 134
npm ERR! tiktok-blockchain@0.1.0 start: `env-cmd -f ./neardev/dev-account.env parcel src/index.html`
npm ERR! Exit status 134
npm ERR! 
npm ERR! Failed at the tiktok-blockchain@0.1.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/porton/.npm/_logs/2020-06-18T18_01_19_938Z-debug.log
[nodemon] app crashed - waiting for file changes before starting...
```