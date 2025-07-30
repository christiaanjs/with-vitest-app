import { describe, it, expect } from 'vitest'

describe('NODE_ENV', () => {
  it('should be set to "test" in the test environment', () => {
    expect(process.env.NODE_ENV).toBe('test')
  })
})
