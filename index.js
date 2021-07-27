const rankContainer = document.querySelector('.rank-container')

data.data.forEach(item => {
    rankContainer.innerHTML += `
    <div class="rank-item">
        <div class="name">${item.name}</div>
        <div class="total">
            <div class="grade" style="width: ${(item.grade / data.total) * 100}%;">
            </div>
            <div class="per-total" style="left:${(item.grade / data.total) * 100}%;">${item.grade}/${data.total}</div>
        </div>
    </div>
    `
})
