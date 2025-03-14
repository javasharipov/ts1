//task1
{
	function full_name(name: string): string {
		const names = name.trim().split(' ')
		if (names.length === 2) {
			return names[0][0] + names[1][0]
		}
		return ''
	}
	console.log(full_name('John Doe'))
}

//task2
{
	function yesOrNo(input: string): boolean | null {
		if (input === 'Yes') return true
		if (input === 'No') return false
		return null
	}
	console.log(yesOrNo('Yes'))
}

//task3
{
	function userInfo(name: string, age: number, isStudent: boolean): string {
		if (isStudent) {
			return `${name} is ${age} years old and is a student.`
		}
		return `${name} is ${age} years old and is not a student.`
	}
	console.log(userInfo('John', 25, true))
}

//task4
{
	function handleInput(input: string | number): string | number {
		if (typeof input === 'number') {
			return input * input
		}
		return `Hello, ${input}`
	}
	console.log(handleInput(5))
	console.log(handleInput('Alice'))
}

//task5
{
	type User = [id: number, username: string, isAdmin: boolean]
	const user: User = [1, 'Alice', true]
	console.log(user)
}

//task6
{
	interface Car {
		brand: string
		year: number
		isElectric: boolean
	}
	const myCar: Car = { brand: 'Tesla', year: 2023, isElectric: true }
	console.log(myCar)
}

//task7
{
	function getLength(u: string | any[]): number {
		return u.length
	}
	console.log(getLength('Hello'))
	console.log(getLength([1, 2, 3, 4]))
}

//8task
{
	function arrayFromOneToN(n: number): number[] {
		const result: number[] = []
		for (let i = 1; i <= n; i++) {
			result.push(i)
		}
		return result
	}
	console.log(arrayFromOneToN(5))
}

//9 task
{
	function evenNumbersFromKToN(k: number, n: number): number[] {
		const result: number[] = []
		for (let i = k; i <= n; i++) {
			if (i % 2 === 0) result.push(i)
		}
		return result
	}
	console.log(evenNumbersFromKToN(2, 10))
}

//10 task
{
	function error(message: string): never {
		throw new Error(message)
	}
}
