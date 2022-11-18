// switch  ====  xuddi if elsega oxshab ishlaydi faqat aniq bo'lgan bitta holatni tekshirish uchun ishlatiladi.
// o'ziga shart emas o'zgaruvchini qabul qiladi.
// o'zgaruvchilar qiymat jihatidan ham , type jihatidan ham bir biriga teng bo'lishi shart. ===

// let a = 'yomgir';

// switch (a) {
//     case 'qor' :
//         console.log('bugun qor'); 
//     case 'yomgir':
//         console.log('yomgirli kun');
//         continue
        
//     default:
//         console.log('nomalum');
//         break;
// }

// let total = 0;

// for (let i = 1; i < 12; i++) {
    
//     if (total == 10) break;
//     console.log(total += i);
// }

// for (let i = 1; i < 50; i = i + 2) {
//     console.log(i);
//     i += i
    
// }

for (let i = 1; i < 12; i++) {
   if(i%2==0) continue;
    console.log(`${i}`);
}