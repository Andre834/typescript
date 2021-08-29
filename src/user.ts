// acountIfo
// charIfo
// playerInfo

type AccountIfo = {
    id: number
    name: string
    email?: string
}

const account: AccountIfo = {
    id: 123,
    name: 'santiago',
    email: 'santiago@gmail.com'
}

type CharInfo = {
    nickname: string
    level: number
}

const char: CharInfo = {
    nickname: 'pedro',
    level: 100
}

// intercection
type PlayerInfo = AccountIfo & CharInfo


const player: PlayerInfo = {
    id: 123,
    name: 'Biwl',
    nickname: 'Floistom',
    level: 100
}
