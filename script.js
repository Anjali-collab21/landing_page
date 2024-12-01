const productBlocks = document.querySelectorAll('.option1');

productBlocks.forEach((block) => {
   
    block.addEventListener('mouseover', () => {
        block.style.transform = 'scale(1.1)'; 
        block.style.boxShadow = '0 10px 20px rgba(255, 255, 255, 0.5)'; 
    });

    block.addEventListener('mouseout', () => {
        block.style.transform = 'scale(1)'; 
        block.style.boxShadow = 'none'; 
    });
});



