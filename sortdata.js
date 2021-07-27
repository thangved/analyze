data.data = sortBy(data.data, 'grade')

function sortBy(array = [{ name: String, grade: Number }], key) {
    for (let i = 0; i < array.length; i++)
        for (let j = i; j < array.length; j++)
            if (array[j][key] > array[i][key]) {
                temp = array[j]
                array[j] = array[i]
                array[i] = temp
            }
    return array
}