import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/api/profile-data', () => {
    return HttpResponse.json({
      name: 'John Doe',
      bio: 'Software Engineer',
    })
  }),
]
