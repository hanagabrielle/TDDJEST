import { User } from '../../src/models/User.js'

describe('Authentication', () => {
    it('should sum two numbers', async () => {
        const user = User.create({
            name: 'Haninhaaa',
            email: 'Hana@outlook.com',
            password_hash: '20202020'
        })

        console.log(user)

        expect(user.email).toBe('Hana@outlook.com')
    })
})