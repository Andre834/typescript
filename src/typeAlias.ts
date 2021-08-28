// type alias
type Uid = number | string | undefined

function logDetails(uid: Uid, item: string) {
    console.log(`A prodoct with ${uid} has a title as ${item}.`)
}

function logInfo(uid: Uid, user: string) {
    console.log(`An user with ${uid} has a name as ${user}.`)
}

type Platform = 'Windows' | 'Linux' | 'Mac Os' | 'Ios'

function renderPlatform(platform: Platform) {
    return platform
}

logDetails(123, 'show')

logInfo('123', 'show vew')

renderPlatform('Windows')
