// All imports
import { Diary } from './components/Diary.js';

// run
const diary = new Diary({
    selector: 'main'

});



diary.init();

diary.addMeal({
    text: 'Labas rytas 1'
});

diary.addMeal({
    text: 'Labas rytas 2'
});

diary.addMeal({
    text: 'Labas rytas 2'
});
console.log(diary);