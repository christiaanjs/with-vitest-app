# Issue

This example shows how Vitest + SWR + portable stories currently does not work.

## Error

Error seen when trying to run tests

```bash
with-vitest-app git:(main) ✗ npm run test -- --project portable-stories run

> test
> vitest --project portable-stories run

info Using tsconfig paths for react-docgen
info Using tsconfig paths for react-docgen
   No config file found

 RUN  v3.2.4 /Users/cabbiepete/development/myhr/next-upgrade-repos/with-vitest-app

stderr | src/components/Profile/Profile.test.tsx > Profile Component > renders the loading state
Warning: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.
Warning: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.

 ❯  portable-stories  src/components/Profile/Profile.test.tsx (1 test | 1 failed) 12ms
   × Profile Component > renders the loading state 12ms
     → Cannot read properties of null (reading 'useContext')

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

 FAIL   portable-stories  src/components/Profile/Profile.test.tsx > Profile Component > renders the loading state
TypeError: Cannot read properties of null (reading 'useContext')
 ❯ useContext node_modules/react/cjs/react.development.js:1618:21
 ❯ SWRConfig node_modules/swr/dist/_internal/config-context-client-BoS53ST9.mjs:528:26
 ❯ Object.react-stack-bottom-frame node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:22973:20
 ❯ renderWithHooks node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:6666:22
 ❯ updateFunctionComponent node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:8930:19
 ❯ beginWork node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:10555:18
 ❯ runWithFiberInDEV node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:847:13
 ❯ performUnitOfWork node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:15265:22
 ❯ workLoopSync node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:15077:41
 ❯ renderRootSync node_modules/next/dist/compiled/react-dom/cjs/react-dom-client.development.js:15057:11

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯


 Test Files  1 failed (1)
      Tests  1 failed (1)
   Start at  18:42:19
   Duration  807ms (transform 64ms, setup 271ms, collect 142ms, tests 12ms, environment 186ms, prepare 39ms)
```
