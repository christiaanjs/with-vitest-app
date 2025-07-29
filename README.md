# Issue

This example shows how Vitest + SWR + portable stories currently does not work.

## Fix

- do not use both `react()` and `storybookNextJsPlugin()` vitest plugins just
  the `storybookNextJsPlugin()`
- **AND** run the tests in vitest browser mode not using `jsdom` OR `happy-dom`

[Tags to compare](https://github.com/cabbiepete/with-vitest-app/compare/reproduction-portable-stories-error-other-test-types-working...reproduction-portable-stories-working-other-test-types-working)

- Tag with issue: https://github.com/cabbiepete/with-vitest-app/releases/tag/reproduction-portable-stories-error-other-test-types-working
- Tag where it is fixed: https://github.com/cabbiepete/with-vitest-app/releases/tag/reproduction-portable-stories-working-other-test-types-working

## Examples

### Storybook tests with MSW overrides from preview -> story file

```bash
➜  with-vitest-app git:(main) npm run test:storybook -- run Profile

> test:storybook
> vitest --project storybook run Profile

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
Client ID: %s (%s) 72313122-8bc0-4b2e-a729-6d5419c6e711 nested
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
    "callFrame": "http://localhost:63315/Users/cabbiepete/development/myhr/next-upgrade-repos/with-vitest-app/src/components/Profile/Profile.stories.tsx?import&browserv=1753818775655:40:24",
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
stdout | src/components/Profile/Profile.stories.tsx > With Other Profile Data
Request {
  "body": "",
  "headers": {
    "accept": "*/*",
  },
  "method": "GET",
  "url": "http://localhost:63315/api/profile-data",
}
stdout | src/components/Profile/Profile.stories.tsx > With Other Profile Data
Handler: HttpHandler {
  "__kind": "RequestHandler",
  "info": {
    "callFrame": "http://localhost:63315/Users/cabbiepete/development/myhr/next-upgrade-repos/with-vitest-app/src/components/Profile/Profile.stories.tsx?import&browserv=1753818775655:28:24",
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
stdout | src/components/Profile/Profile.stories.tsx > With Other Profile Data
Response {
  "body": "[object Object]",
  "headers": {
    "content-type": "text/plain;charset=UTF-8",
  },
  "status": 404,
  "statusText": "Not Found",
}
stdout | src/components/Profile/Profile.stories.tsx > With Default Handlers From Preview
Request {
  "body": "",
  "headers": {
    "accept": "*/*",
  },
  "method": "GET",
  "url": "http://localhost:63315/api/profile-data",
}
stdout | src/components/Profile/Profile.stories.tsx > With Default Handlers From Preview
Handler: HttpHandler {
  "__kind": "RequestHandler",
  "info": {
    "callFrame": "http://localhost:63315/Users/cabbiepete/development/myhr/next-upgrade-repos/with-vitest-app/src/components/Profile/Profile.stories.tsx?import&browserv=1753818775655:35:24",
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
stdout | src/components/Profile/Profile.stories.tsx > With Default Handlers From Preview
Response {
  "body": "{"name":"Alice Johnson","bio":"Frontend Developer & UX Enthusiast"}",
  "headers": {
    "content-length": "67",
    "content-type": "application/json",
  },
  "status": 200,
  "statusText": "OK",
}
stdout | src/components/Profile/Profile.stories.tsx
Request {
  "body": "",
  "headers": {
    "accept": "*/*",
  },
  "method": "GET",
  "url": "http://localhost:63315/api/profile-data",
}
stdout | src/components/Profile/Profile.stories.tsx
Handler: HttpHandler {
  "__kind": "RequestHandler",
  "info": {
    "callFrame": "    at http://localhost:63315/.storybook/preview.ts:25:16",
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
stdout | src/components/Profile/Profile.stories.tsx
Response {
  "body": "{"name":"John Default","bio":"Default Software Engineer"}",
  "headers": {
    "content-length": "57",
    "content-type": "application/json",
  },
  "status": 200,
  "statusText": "OK",
}
 ✓  storybook (chromium)  src/components/Profile/Profile.stories.tsx (5 tests) 210ms
   ✓ Default 135ms
   ✓ Loading 20ms
   ✓ Error 17ms
   ✓ With Other Profile Data 16ms
   ✓ With Default Handlers From Preview 19ms

 Test Files  1 passed (1)
      Tests  5 passed (5)
   Start at  07:52:54
   Duration  1.53s (transform 0ms, setup 418ms, collect 30ms, tests 210ms, environment 0ms, prepare 1.95s)
```

### Portable stories

```bash
with-vitest-app git:(main) npm run test -- --project portable-stories run

> test
> vitest --project portable-stories run

info Using tsconfig paths for react-docgen
info Using tsconfig paths for react-docgen
   No config file found

 RUN  v3.2.4 /Users/cabbiepete/development/myhr/next-upgrade-repos/with-vitest-app

   No config file found
7:50:26 AM [vite] (client) Re-optimizing dependencies because lockfile has changed
stdout | unknown test
%cDocumentation: %chttps://mswjs.io/docs font-weight:bold font-weight:normal
stdout | unknown test
Found an issue? https://github.com/mswjs/msw/issues
stdout | unknown test
Worker script URL: http://localhost:63315/mockServiceWorker.js
stdout | unknown test
Worker scope: http://localhost:63315/
stdout | unknown test
Client ID: %s (%s) 7a26bf98-258f-4fb6-a934-e7f49cdbf11f nested
stderr | unknown test
[MSW] Warning: intercepted a request without a matching request handler:

  • GET /src/components/Profile/Profile.css

If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/http/intercepting-requests
stdout | src/components/Profile/Profile.test.tsx > Profile Component > should render the default profile data
Request {
  "body": "",
  "headers": {
    "accept": "*/*",
  },
  "method": "GET",
  "url": "http://localhost:63315/api/profile-data",
}
stdout | src/components/Profile/Profile.test.tsx > Profile Component > should render the default profile data
Handler: HttpHandler {
  "__kind": "RequestHandler",
  "info": {
    "callFrame": "http://localhost:63315/src/components/Profile/Profile.stories.tsx:29:14",
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
stdout | src/components/Profile/Profile.test.tsx > Profile Component > should render the default profile data
Response {
  "body": "[object Object]",
  "headers": {
    "content-type": "text/plain;charset=UTF-8",
  },
  "status": 404,
  "statusText": "Not Found",
}
stdout | src/components/Profile/Profile.test.tsx
Request {
  "body": "",
  "headers": {
    "accept": "*/*",
  },
  "method": "GET",
  "url": "http://localhost:63315/api/profile-data",
}
stdout | src/components/Profile/Profile.test.tsx
Handler: HttpHandler {
  "__kind": "RequestHandler",
  "info": {
    "callFrame": "http://localhost:63315/src/components/Profile/Profile.stories.tsx:45:14",
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
stdout | src/components/Profile/Profile.test.tsx
Response {
  "body": "{"name":"John Doe","bio":"Software Engineer"}",
  "headers": {
    "content-length": "45",
    "content-type": "application/json",
  },
  "status": 200,
  "statusText": "OK",
}
 ✓  portable-stories (chromium)  src/components/Profile/Profile.test.tsx (3 tests) 123ms
   ✓ Profile Component > renders the loading state 97ms
   ✓ Profile Component > renders the error state 9ms
   ✓ Profile Component > should render the default profile data 15ms

 Test Files  1 passed (1)
      Tests  3 passed (3)
   Start at  07:50:26
   Duration  1.55s (transform 0ms, setup 466ms, collect 111ms, tests 123ms, environment 0ms, prepare 1.91s)
```

### Running storybook as tests along side vitest test files

```bash
➜  with-vitest-app git:(main) npm run test:profile-all

> test:profile-all
> vitest --project sans-storybook run Profile && vitest --project storybook run Profile && vitest --project portable-stories run Profile

info Using tsconfig paths for react-docgen
info Using tsconfig paths for react-docgen
   No config file found

 RUN  v3.2.4 /Users/cabbiepete/development/myhr/next-upgrade-repos/with-vitest-app

stderr | __tests__/profile.test.tsx > Profile Page Tests > loads profile data
Warning: `ReactDOMTestUtils.act` is deprecated in favor of `React.act`. Import `act` from `react` instead of `react-dom/test-utils`. See https://react.dev/warnings/react-dom-test-utils for more info.

 ✓  sans-storybook  __tests__/profile.test.tsx (2 tests) 78ms
   ✓ Profile Page Tests > loads profile data 60ms
   ✓ Profile Page Tests > handles different profile data 17ms

 Test Files  1 passed (1)
      Tests  2 passed (2)
   Start at  07:51:48
   Duration  835ms (transform 35ms, setup 166ms, collect 23ms, tests 78ms, environment 325ms, prepare 44ms)

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
Client ID: %s (%s) b84252e5-fe1e-4666-aaaa-b437950947ef nested
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
    "callFrame": "http://localhost:63315/Users/cabbiepete/development/myhr/next-upgrade-repos/with-vitest-app/src/components/Profile/Profile.stories.tsx?import&browserv=1753818711762:40:24",
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
stdout | src/components/Profile/Profile.stories.tsx > With Other Profile Data
Request {
  "body": "",
  "headers": {
    "accept": "*/*",
  },
  "method": "GET",
  "url": "http://localhost:63315/api/profile-data",
}
stdout | src/components/Profile/Profile.stories.tsx > With Other Profile Data
Handler: HttpHandler {
  "__kind": "RequestHandler",
  "info": {
    "callFrame": "http://localhost:63315/Users/cabbiepete/development/myhr/next-upgrade-repos/with-vitest-app/src/components/Profile/Profile.stories.tsx?import&browserv=1753818711762:28:24",
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
stdout | src/components/Profile/Profile.stories.tsx > With Other Profile Data
Response {
  "body": "[object Object]",
  "headers": {
    "content-type": "text/plain;charset=UTF-8",
  },
  "status": 404,
  "statusText": "Not Found",
}
stdout | src/components/Profile/Profile.stories.tsx > With Default Handlers From Preview
Request {
  "body": "",
  "headers": {
    "accept": "*/*",
  },
  "method": "GET",
  "url": "http://localhost:63315/api/profile-data",
}
stdout | src/components/Profile/Profile.stories.tsx > With Default Handlers From Preview
Handler: HttpHandler {
  "__kind": "RequestHandler",
  "info": {
    "callFrame": "http://localhost:63315/Users/cabbiepete/development/myhr/next-upgrade-repos/with-vitest-app/src/components/Profile/Profile.stories.tsx?import&browserv=1753818711762:35:24",
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
stdout | src/components/Profile/Profile.stories.tsx > With Default Handlers From Preview
Response {
  "body": "{"name":"Alice Johnson","bio":"Frontend Developer & UX Enthusiast"}",
  "headers": {
    "content-length": "67",
    "content-type": "application/json",
  },
  "status": 200,
  "statusText": "OK",
}
stdout | src/components/Profile/Profile.stories.tsx
Request {
  "body": "",
  "headers": {
    "accept": "*/*",
  },
  "method": "GET",
  "url": "http://localhost:63315/api/profile-data",
}
stdout | src/components/Profile/Profile.stories.tsx
Handler: HttpHandler {
  "__kind": "RequestHandler",
  "info": {
    "callFrame": "    at http://localhost:63315/.storybook/preview.ts:25:16",
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
stdout | src/components/Profile/Profile.stories.tsx
Response {
  "body": "{"name":"John Default","bio":"Default Software Engineer"}",
  "headers": {
    "content-length": "57",
    "content-type": "application/json",
  },
  "status": 200,
  "statusText": "OK",
}
 ✓  storybook (chromium)  src/components/Profile/Profile.stories.tsx (5 tests) 220ms
   ✓ Default 152ms
   ✓ Loading 15ms
   ✓ Error 20ms
   ✓ With Other Profile Data 15ms
   ✓ With Default Handlers From Preview 15ms

 Test Files  1 passed (1)
      Tests  5 passed (5)
   Start at  07:51:50
   Duration  1.54s (transform 0ms, setup 473ms, collect 31ms, tests 220ms, environment 0ms, prepare 1.64s)

info Using tsconfig paths for react-docgen
info Using tsconfig paths for react-docgen
   No config file found

 RUN  v3.2.4 /Users/cabbiepete/development/myhr/next-upgrade-repos/with-vitest-app

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
Client ID: %s (%s) b4e7300e-fe51-4952-a367-e6876a6a7fad nested
stderr | unknown test
[MSW] Warning: intercepted a request without a matching request handler:

  • GET /src/components/Profile/Profile.css

If you still wish to intercept this unhandled request, please create a request handler for it.
Read more: https://mswjs.io/docs/http/intercepting-requests
stdout | src/components/Profile/Profile.test.tsx > Profile Component > should render the default profile data
Request {
  "body": "",
  "headers": {
    "accept": "*/*",
  },
  "method": "GET",
  "url": "http://localhost:63315/api/profile-data",
}
stdout | src/components/Profile/Profile.test.tsx > Profile Component > should render the default profile data
Handler: HttpHandler {
  "__kind": "RequestHandler",
  "info": {
    "callFrame": "http://localhost:63315/src/components/Profile/Profile.stories.tsx:29:14",
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
stdout | src/components/Profile/Profile.test.tsx > Profile Component > should render the default profile data
Response {
  "body": "[object Object]",
  "headers": {
    "content-type": "text/plain;charset=UTF-8",
  },
  "status": 404,
  "statusText": "Not Found",
}
stdout | src/components/Profile/Profile.test.tsx
Request {
  "body": "",
  "headers": {
    "accept": "*/*",
  },
  "method": "GET",
  "url": "http://localhost:63315/api/profile-data",
}
stdout | src/components/Profile/Profile.test.tsx
Handler: HttpHandler {
  "__kind": "RequestHandler",
  "info": {
    "callFrame": "http://localhost:63315/src/components/Profile/Profile.stories.tsx:45:14",
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
stdout | src/components/Profile/Profile.test.tsx
Response {
  "body": "{"name":"John Doe","bio":"Software Engineer"}",
  "headers": {
    "content-length": "45",
    "content-type": "application/json",
  },
  "status": 200,
  "statusText": "OK",
}
 ✓  portable-stories (chromium)  src/components/Profile/Profile.test.tsx (3 tests) 126ms
   ✓ Profile Component > renders the loading state 100ms
   ✓ Profile Component > renders the error state 9ms
   ✓ Profile Component > should render the default profile data 14ms

 Test Files  1 passed (1)
      Tests  3 passed (3)
   Start at  07:51:53
   Duration  1.33s (transform 0ms, setup 472ms, collect 115ms, tests 126ms, environment 0ms, prepare 1.45s)
```
