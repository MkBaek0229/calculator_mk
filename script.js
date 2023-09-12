class Calculator {
    $previousPreview 
    $currentPreview

    constructor($previousPreview, $currentPreview) {
        this.$previousPreview = $previousPreview
        this.$currentPreview = $currentPreview
    }

    onPressNumber(number) {
        this.$currentPreview.textContent += number
    }

    onPressOperation(operation) {
        this.$previousPreview.textContent = `${this.$currentPreview.textContent} ${operation}`
        this.$currentPreview.textContent = ''
    }
    
    onEqual() {
        const previousValue = parseFloat(this.$previousPreview.textContent)
        const currentValue = parseFloat(this.$currentPreview.textContent)
        let result
    
        if (isNaN(previousValue) || isNaN(currentValue)) {
            return;
        }
        switch (this.$previousPreview.textContent.slice(-1)) {
            case '+':
                result = previousValue + currentValue
                break;
            case '-':
                result = previousValue - currentValue
                break;
            case '*':
                result = previousValue * currentValue
                break;
            case '÷':
                result = previousValue / currentValue
                break;
            default:
                return;
        }

        this.$currentPreview.textContent = result.toString()
    }
    

    clear() {
        this.$previousPreview.textContent = ''
        this.$currentPreview.textContent = ''
    }
}



// 값 표시
const $previousPreview = document.querySelector('[data-previous-preview]')
const $currentPreview = document.querySelector('[data-current-preview]')

// 사칙연산
const $plus = document.querySelector("[data-btn-plus]")
const $minus = document.querySelector('[data-btn-minus]')
const $multiply = document.querySelector('[data-btn-multiply]')
const $divide = document.querySelector('[data-btn-divide]')
const $equal = document.querySelector('[data-btn-equal]'); 
const $clear = document.querySelector('[data-btn-reset]'); 

// 숫자, 연산
const $numbers = document.querySelectorAll("[data-btn-number]")
const $operations = document.querySelectorAll("[data-btn-operation]")

const cal = new Calculator($previousPreview, $currentPreview)


$numbers.forEach(($number) => {
    $number.addEventListener("click" , (e) => {
        cal.onPressNumber(e.target.textContent)
    })
})

$operations.forEach(($operation) => {
    $operation.addEventListener("click", (e) => {
        switch ($operation) {
            case $plus:
                cal.onPressOperation("+")
                break;
            case $minus:
                cal.onPressOperation("-")
                break;
            case $multiply:
                cal.onPressOperation("*")
                break;
            case $divide:
                cal.onPressOperation("÷")
                break;
            case $equal:
                cal.onEqual()
                break;
            case $clear:
                cal.clear()
                break;
            default:
                break;
       }
    })
})
