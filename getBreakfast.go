package main

import "fmt"

type Human struct {
	name   string
	weight int
}

type Food struct {
	name     string
	calories int
}

func getMealed(f Food) string {
	if f.calories < 400 {
		return "лёгкий завтрак, не слишком много энергии было получено при его поедании"
	} else if f.calories >= 400 && f.calories < 700 {
		return "плотный завтрак, заряд энергии на день настроен, этот монстр готов получать знания"
	} else {
		return "ну это уже переедание, скорее обед, чем завтрак"
	}
}

func getEnergy(f Food) int {
	return f.calories
}

func main() {
	Mark := Human{name: "Mark", weight: 75}
	breakfast1 := Food{name: "Блинчики", calories: 350}
	breakfast2 := Food{name: "Пирожное", calories: 620}

	energyBrkfst1 := getEnergy(breakfast1)
	energyBrkfst2 := getEnergy(breakfast2)

	fmt.Printf("Имя - '%s' весит - '%d'килограмм\n", Mark.name, Mark.weight)
	fmt.Printf("Первый вид завтрака это - '%s', в которых '%d' ккал\n", breakfast1.name, breakfast2.calories)
	fmt.Printf("По моим сугубо личным меркам - это '%s'\n", getMealed(breakfast1))
	fmt.Printf("Второй вид завтрака это = '%s', в котором '%d' ккал\n", breakfast2.name, breakfast2.calories)
	fmt.Printf("По моим сугубо личным меркам - это '%s'\n", getMealed(breakfast2))

	fmt.Println("_________что питательнее?_________")
	if energyBrkfst1 > energyBrkfst2 {
		fmt.Printf("'%s' питательнее, ведь '%d' ккал первого блюда больше, чем '%d' ккал второго\n", breakfast1.name)
	} else {
		fmt.Printf("'%s' питательнее, ведь '%d' ккал первого блюда меньше, чем '%d' ккал у '%s'\n", breakfast2.name, energyBrkfst1, energyBrkfst2, breakfast2.name)
	}
}
