const buf = Buffer.from('runoob', 'ascii')

console.log(buf.toString('hex'))
console.log(buf.toString('base64'))

const buf1 = Buffer.alloc(10)
const buf2 = Buffer.alloc(10, 1)
const buf3 = Buffer.allocUnsafe(10)
const buf4 = Buffer.from([1, 2, 3])
const buf5 = Buffer.from('test', 'utf8')
const buf6 = Buffer.from('test', 'latin1')
console.log(buf1, buf2, buf3, buf4, buf5, buf6)

const buf7 = Buffer.alloc(26)

for (var i = 0; i<26; i++) {
    buf7[i] = i + 97
}

console.log(buf7.toString('ascii'))
console.log(buf7.toString('ascii', 0, 5))
console.log(buf7.toString('utf8', 0 ,5))
console.log(buf7.toString(undefined, 0, 5))

const buf8 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5])
const json = JSON.stringify(buf8)

console.log(json)

const buf9 = Buffer.from('菜鸟教程')
const buf10 = Buffer.from('www.runoob.com')

const buf11= Buffer.concat([buf9, buf10])
console.log('buf11: '+buf11.toString())

const buf12 = Buffer.from('abcdefghijkl');
const buf13 = Buffer.from('RUNOOB')

buf13.copy(buf12, 2)

console.log(buf12.toString())
console.log(buf13.toString())

console.log('buf12的长度:' + buf12.length)