document.getElementById('submit').addEventListener('click', function(){
    if(document.getElementById('imglink').value.length === 0){
        alert('Please enter an image url to proceed')
    }
    else{
        let memesList = document.getElementById("list");

        let newMeme = document.createElement("div");
        newMeme.classList.add('meme');

        let image = document.createElement("img");
        image.src = document.getElementById('imglink').value;
        newMeme.appendChild(image);

        let top = document.createElement("div");
        top.classList.add('top');
        top.innerHTML = document.getElementById("toptext").value;
        newMeme.appendChild(top);

        let bottom = document.createElement("div");
        bottom.classList.add('bottom');
        bottom.innerHTML = document.getElementById("bottomtext").value;
        newMeme.appendChild(bottom);

        let deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.innerText = "delete meme";
        deleteButton.addEventListener('click', function(){
            newMeme.remove();
        })
        newMeme.appendChild(deleteButton);

        memesList.appendChild(newMeme);

        document.getElementById("form").reset();
    }
}); 