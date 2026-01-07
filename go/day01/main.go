package main // 每个Go文件都以package声明开始

import "fmt" // 导入标准库的fmt包

func main() {
	// 打印Hello World到控制台
	fmt.Println("Hello, Go 世界!")

	// 变量声明和打印
	name := "Go开发者" // 短变量声明，类型自动推断
	fmt.Printf("欢迎你，%s!\n", name)

	// 基本运算
	a, b := 10, 20
	sum := a + b
	fmt.Printf("%d + %d = %d\n", a, b, sum)

	multi := a * b
	fmt.Printf("%d * %d = %d\n", a, b, multi)

	myName := "sera"
	myAge := 20

	fmt.Printf("我的名字是 %s, 今年 %d 岁了", myName, myAge)
}
