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

Can see the 2 working types of vitest and the 1 failing

```bash
with-vitest-app git:(main) npm run test:profile-all

> test:profile-all
> vitest --project sans-storybook run Profile && vitest --project storybook run Profile && vitest --project portable-stories run Profile

info Using tsconfig paths for react-docgen
info Using tsconfig paths for react-docgen
   No config file found

 RUN  v3.2.4 /Users/cabbiepete/development/myhr/next-upgrade-repos/with-vitest-app

stderr | __tests__/profile.test.tsx > Profile Page Tests > loads profile data
Warning: `ReactDOMTestUtils.act` is deprecated in favor of `React.act`. Import `act` from `react` instead of `react-dom/test-utils`. See https://react.dev/warnings/react-dom-test-utils for more info.

 ✓  sans-storybook  __tests__/profile.test.tsx (2 tests) 79ms
   ✓ Profile Page Tests > loads profile data 61ms
   ✓ Profile Page Tests > handles different profile data 17ms

 Test Files  1 passed (1)
      Tests  2 passed (2)
   Start at  09:57:17
   Duration  841ms (transform 38ms, setup 177ms, collect 26ms, tests 79ms, environment 348ms, prepare 51ms)

info Using tsconfig paths for react-docgen
info Using tsconfig paths for react-docgen
   No config file found

 RUN  v3.2.4 /Users/cabbiepete/development/myhr/next-upgrade-repos/with-vitest-app

info Using tsconfig paths for react-docgen
   No config file found
stdout | unknown test
%cDocumentation: %chttps://mswjs.io/docs font-weight:bold font-weight:normal
stdout | unknown test
Found an issue? https://github.com/mswjs/msw/issues
stdout | unknown test
Worker script URL: http://localhost:63315/mockServiceWorker.js
stdout | unknown test
Worker scope: http://localhost:63315/
stdout | unknown test
Client ID: %s (%s) fe9af9ef-c9c2-4a1f-ba94-5ef229196c8a nested
stderr | unknown test
[MSW] Warning: intercepted a request without a matching request handler:

  • GET /src/components/Profile/Profile.css

If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/http/intercepting-requests
stdout | src/components/Profile/Profile.stories.tsx > Default
Request {
  "body": "",
  "headers": {
    "accept": "*/*",
  },
  "method": "GET",
  "url": "http://localhost:63315/api/profile-data",
}
stdout | src/components/Profile/Profile.stories.tsx > Default
Handler: HttpHandler {
  "__kind": "RequestHandler",
  "info": {
    "callFrame": "    at http://localhost:63315/Users/cabbiepete/development/myhr/next-upgrade-repos/with-vitest-app/src/components/Profile/Profile.stories.tsx?import&browserv=1752530240409:25:23",
    "header": "GET /api/profile-data",
    "method": "GET",
    "path": "/api/profile-data",
  },
  "isUsed": true,
  "options": {},
  "resolver": [Function anonymous],
  "resolverIterator": undefined,
  "resolverIteratorResult": undefined,
}
stdout | src/components/Profile/Profile.stories.tsx > Default
Response {
  "body": "{"name":"John Doe","bio":"Software Engineer"}",
  "headers": {
    "content-length": "45",
    "content-type": "application/json",
  },
  "status": 200,
  "statusText": "OK",
}
 ✓  storybook (chromium)  src/components/Profile/Profile.stories.tsx (4 tests) 203ms
   ✓ Default 145ms
   ✓ Loading 24ms
   ✓ Error 16ms
   ✓ With Other Profile Data 15ms

 Test Files  1 passed (1)
      Tests  4 passed (4)
   Start at  09:57:19
   Duration  1.64s (transform 0ms, setup 500ms, collect 68ms, tests 203ms, environment 0ms, prepare 1.67s)

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

 ❯  portable-stories  src/components/Profile/Profile.test.tsx (1 test | 1 failed) 14ms
   × Profile Component > renders the loading state 13ms
     → Cannot read properties of null (reading 'useContext')

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Failed Tests 1 ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯

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

⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/1]⎯


 Test Files  1 failed (1)
      Tests  1 failed (1)
   Start at  09:57:21
   Duration  824ms (transform 67ms, setup 303ms, collect 119ms, tests 14ms, environment 193ms, prepare 47ms)
```
