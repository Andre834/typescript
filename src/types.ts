// boolean (true / false)
let isOpen: boolean
isOpen = true

// string ('foo', "foo", `foo`)
let msg: string
msg = `foo ${isOpen}`

// number
let total: number
total = 0xff0

// array (type[])
let items: string[]
items = ['1', '2', '3', '4']

// array type generics
let values: Array<number>
values = [1, 2, 3]

// tuple
let title: [number, string]
title = [1, 'andre']

// enum
enum colors{
    white = '#fff',
    black = '#000'
}

// any
let coisa: any
coisa = true
coisa = 'pedro'
coisa = [1]

// void
function logger(): void {
    console.log('foo')
}

// null / undefined
type Bla = string | undefined

// never
function error(): never {
    throw new Error("error")
}

// object
let cat: object
cat: {
    name: "tom"
}

// type inference
let message = 'show new'