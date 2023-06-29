const slider =document.querySelector('.slider');
const rightarrow =document.querySelector('.right');
const leftarrow =document.querySelector('.left');

var sectionIndex=0;

rightarrow.addEventListener('click',function(){
    sectionIndex=(sectionIndex<4)?sectionIndex+1:4;
    slider.style.transform = 'translate(' + (sectionIndex)*-20 + '% )';
});
leftarrow.addEventListener('click',function(){
    sectionIndex=(sectionIndex>0)?sectionIndex-1:0;
    slider.style.transform = 'translate(' + (sectionIndex)*-20 + '% )';
});