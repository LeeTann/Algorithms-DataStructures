import "strings"

func isValid(s string) bool {
	validOpening := "({["
	stack := []rune{}
	validPair := map[rune]rune{
		')': '(',
		'}': '{',
		']': '[',
	}

	for _, char := range s {
		if strings.Contains(validOpening, string(char)) {
			stack = append(stack, char)
		} else {
			if len(stack) == 0 {
				return false
			}
			if stack[len(stack)-1] == validPair[char] {
				stack = stack[:len(stack)-1]
			} else {
				stack = append(stack, char)
			}
		}

	}
	return len(stack) == 0
}