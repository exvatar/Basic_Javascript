//----24-------------------------------------------------------
//----ข้อ 1-------------------------------------------------------
// function draw(n) {
//     let star = "";
//     for (let index = 0; index < n; index++) {
//         star += "*"
//     }
//     return star;
// }

// let star = prompt("input num","0");
// alert(draw(star));

//----ข้อ 2-------------------------------------------------------
// function draw(n = 0) {
//     let star = "";
//     let i , j;
//     for (i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             star += "*";
//         }

//         star += "\n"
//     }
//     return star;
// }

// let star = prompt("input num","0");
// alert(draw(star));

//----ข้อ 3-------------------------------------------------------
// function draw(n = 0) {
//     let star = "";
//     let i , j;
//     for (i = 0; i < n; i++) {
//         for (let j = 1; j <= n; j++) {
//             star += j;
//         }
//         star += "\n"
//     }
//     return star;
// }

// let star = prompt("input num","0");
// alert(draw(star));

//----ข้อ 4-------------------------------------------------------
// function draw(n = 0) {
//     let star = "";
//     let i , j;
//     for (i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             star += i;
//         }
//         star += "\n"
//     }
//     return star;
// }

// let star = prompt("input num","0");
// alert(draw(star));

//----ข้อ 5-------------------------------------------------------
// function draw(n = 0) {
//     let star = "";
//     let i , j;
//     for (i = n; i > 0; i--) {
//         for (let j = 1; j <= n; j++) {
//             star += i;
//         }
//         star += "\n"
//     }
//     return star;
// }

// let star = prompt("input num","0");
// alert(draw(star));

//----ข้อ 6-------------------------------------------------------
// function draw(n = 0) {
//     let star = "";
//     let i , j , k = 1;
//     for (i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             star += k;
//             k++
//         }
//         star += "\n"
//     }
//     return star;
// }

// let star = prompt("input num","0");
// alert(draw(star));

//----ข้อ 7-------------------------------------------------------
// function draw(n = 0) {
//     let star = "";
//     let i , j , k = n*n;
//     for (i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             star += k;
//             k--
//         }
//         star += "\n"
//     }
//     return star;
// }

// let star = prompt("input num","0");
// alert(draw(star));

//----ข้อ 8-------------------------------------------------------
// function draw(n = 0) {
//     let star = "";
//     let i , j , k = 0;
//     for (i = 1; i <= n; i++) {
//         star += k;
//         k += 2;
//         star += "\n"
//     }
//     return star;
// }

// let star = prompt("input num","0");
// alert(draw(star));

//----ข้อ 9-------------------------------------------------------
// function draw(n = 0) {
//     let star = "";
//     let i , j , k = 2;
//     for (i = 1; i <= n; i++) {
//         star += k;
//         k += 2;
//         star += "\n"
//     }
//     return star;
// }

// let star = prompt("input num","0");
// alert(draw(star));

//----ข้อ 10-------------------------------------------------------
// function draw(n = 0) {
//     let star = "";
//     let i , j , k = 1;
//     for (i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             k = j*i;
//             star += k;
//         }
//         star += "\n"
//     }
//     return star;
// }

// let star = prompt("input num","0");
// alert(draw(star));

//----ข้อ 11-------------------------------------------------------
// function draw(n = 0) {
//     let star = "";
//     let i , j , k = 1;
//     for (i = 1; i <= n; i++) {
//         for (let j = 1; j <= n; j++) {
//             if (j == i) {
//                 star += "_";
//             } else {
//                 star += "*";
//             }
//         }
//         star += "\n"
//     }
//     return star;
// }

// let star = prompt("input num","0");
// alert(draw(star));

//----ข้อ 12-------------------------------------------------------
// function draw(n = 0) {
//     let star = "";
//     let i , j , k = 0;
//     k = n;
//     for (i = 1; i <= n; i++) {
//         for (j = 1; j <= n; j++) {
//             if (j == k) {
//                 star += "_";
//                 k--;
//             } else {
//                 star += "*";
//             }   
//         }
//         star += "\n"
//     }
//     return star;
// }

// let star = prompt("input num","0");
// alert(draw(star));

//----ข้อ 13-------------------------------------------------------
// function draw(n = 0) {
//     let star = "";
//     let i , j;
//     for (i = 1; i <= n; i++) {
//         for (j = 1; j <= n; j++) {
//             if (j > i) {
//                 star += "_";
//             }
//             else{
//                 star += "*";
//             }
//         }
//         star += "\n"
//     }
//     return star;
// }

// let star = prompt("input num","0");
// alert(draw(star));

//----ข้อ 14-------------------------------------------------------
// function draw(n = 0) {
//     let star = "";
//     let i , j , k = n;
//     for (i = 1; i <= n; i++) {
//         for (j = 1; j <= n; j++) {
//             if (j <= k) {
//                 star += "*"
//             } else {
//                 star += "_"
//             }
//         }
//         k--
//         star += "\n"
//     }
//     return star;
// }

// let star = prompt("input num","0");
// alert(draw(star));

//----ข้อ 15-------------------------------------------------------
// function draw(n = 0) {
//     let star = "";
//     let i, j, k = n;
//     for (i = 1; i <= n; i++) {
//         for (j = 1; j <= n; j++) {
//             if (j > i) {
//                 star += "_";
//             }
//             else{
//                 star += "*";
//             }
//         }
//         star += "\n"
//     }
//     for (i = 1; i <= n; i++) {
//         for (j = 1; j <= n; j++) {
//             if (j < k) {
//                 star += "*"
//             } else {
//                 star += "_"
//             }
//         }
//         star += "\n"
//     }
//     return star;
// }
// let star = prompt("input num","0");
// alert(draw(star));

//----ข้อ 16-------------------------------------------------------
// function draw(n = 0) {
//     let star = "";
//     let i, j, k = n;
//     for (i = 1; i <= n; i++) {
//         for (j = 1; j <= n; j++) {
//             if (j > i) {
//                 star += "_";
//             }
//             else{
//                 star += "*";
//             }
//         }
//         star += "\n"
//     }
//     for (i = 1; i <= n; i++) {
//         for (j = 1; j <= n; j++) {
//             if (j < k) {
//                 star += "*"
//             } else if (k != 1) {
//                 star += "_"
//             }
//         }
//         k--
//         star += "\n"
//     }
//     return star;
// }
// let star = prompt("input num","0");
// alert(draw(star));

//----ข้อ 17-------------------------------------------------------
// function draw(n = 0) {
//     let star = "";
//     let i , j , k = n;
//     for (i = 1; i <= n; i++) {
//         for (j = 1; j <= n; j++) {
//             if (j < k) {
//                 star += "_";
//             } else star += "*";
//         }
//         k--;
//         star += "\n"
//     }
//     return star;
// }

// let star = prompt("input num","0");
// alert(draw(star));

//----ข้อ 18-------------------------------------------------------
// function draw(n = 0) {
//     let star = "";
//     let i , j , k = 0;
//     for (i = 1; i <= n; i++) {
//         for (j = 1; j <= n; j++) {
//             if (j > k) {
//                 star += "*";
//             } else star += "_";
//         }
//         k++
//         star += "\n"
//     }
//     return star;
// }

// let star = prompt("input num","0");
// alert(draw(star));

//----ข้อ 19-------------------------------------------------------
// function draw(n = 0) {
//     let star = "";
//     let i , j , k = 0 , l = n;
//     for (i = 1; i <= n; i++) {
//         for (j = 1; j <= n; j++) {
//             if (i ==1) {
//                 continue;
//             }
//             if (j <= l) {
//                 star += "_";
//             } else star += "*";
//         }
//         l--
//         star += "\n"
//     }
//     for (i = 1; i <= n; i++) {
//         for (j = 1; j <= n; j++) {
//             if (j > k) {
//                 star += "*";
//             } else star += "_";
//         }
//         k++
//         star += "\n"
//     }
//     return star;
// }

// let star = prompt("input num","0");
// alert(draw(star));

//----ข้อ 20-------------------------------------------------------
// function draw(n = 0) {
//     let star = "";
//     let i , j , k = 0 , l = n , o = 1;
//     for (i = 1; i <= n; i++) {
//         for (j = 1; j <= n; j++) {
//             if (i ==1) {
//                 continue;
//             }
//             if (j <= l) {
//                 star += "-";
//             } else {
//                 star += o;
//                 o++;
//             }
//         }
//         l--
//         star += "\n"
//     }
//     for (i = 1; i <= n; i++) {
//         for (j = 1; j <= n; j++) {
//             if (j > k) {
//                 star += o;
//                 o++
//             } else {
//                 star += "-";
//             }
//         }
//         k++
//         star += "\n"
//     }
//     return star;
// }

// let star = prompt("input num","0");
// alert(draw(star));

//----ข้อ 21-------------------------------------------------------
// function draw(n = 0) {
//     let star = "";
//     let i , j , k = n;
//     for (i = 1; i <= n; i++) {
//         for (j = 1; j <= n; j++) {
//             if (j < k) {
//                 star += "_";
//             } else star += "*";
//         }
//         for (j = 2; j <= n; j++) {
//             if (j > i) {
//                 star += "_";
//             }
//             else{
//                 star += "*";
//             }
//         }
//         k--;
//         star += "\n"
//     }
//     return star;
// }

// let star = prompt("input num","0");
// alert(draw(star));

//----ข้อ 22-------------------------------------------------------
// function draw(n = 0) {
//     let star = "";
//     let i , j , k = 0, l = n ;
//     for (i = 1; i <= n; i++) {
//         for (j = 1; j <= n; j++) {
//             if (j > k) {
//                 star += "*";
//             } else star += "_";
//         }
//         for (j = 2; j <= n; j++) {
//             if (j <= l) {
//                 star += "*"
//             } else {
//                 star += "_"
//             }
//         }
//         l--
//         k++
//         star += "\n"
//     }
//     return star;
// }

// let star = prompt("input num","0");
// alert(draw(star));

//----ข้อ 23-------------------------------------------------------
// function draw(n = 0) {
//     let star = "";
//     let i , j , k = 0, m = n , l = n;
//     for (i = 2; i <= n; i++) {
//         for (j = 1; j <= n; j++) {
//             if (j < m) {
//                 star += "_";
//             } else star += "*";
//         }
//         for (j = 2; j <= n; j++) {
//             if (j >= i) {
//                 star += "_";
//             }
//             else{
//                 star += "*";
//             }
//         }
//         m--;
//         star += "\n"
//     }
//     for (i = 1; i <= n; i++) {
//         for (j = 1; j <= n; j++) {
//             if (j > k) {
//                 star += "*";
//             } else star += "_";
//         }
//         for (j = 2; j <= n; j++) {
//             if (j <= l) {
//                 star += "*"
//             } else {
//                 star += "_"
//             }
//         }
//         l--
//         k++
//         star += "\n"
//     }
//     return star;
// }

// let star = prompt("input num","0");
// alert(draw(star));

//----ข้อ 24-------------------------------------------------------
// function draw(n = 0) {
//     let star = "";
//     let i , j , k = 0, m = n , l = n, num = 1;
//     for (i = 2; i <= n; i++) {
//         for (j = 1; j <= n; j++) {
//             if (j < m) {
//                 star += "_";
//             } else {
//                 star += num;
//                 num++;
//             }
//         }
//         for (j = 2; j <= n; j++) {
//             if (j >= i) {
//                 star += "_";
//             }
//             else{
//                 star += num;
//                 num++;
//             }
//         }
//         m--;
//         star += "\n"
//     }
//     for (i = 1; i <= n; i++) {
//         for (j = 1; j <= n; j++) {
//             if (j > k) {
//                 star += num; 
//                 num++;
//             } else {
//                 star += "_";
//             }
//         }
//         for (j = 2; j <= n; j++) {
//             if (j <= l) {
//                 star += num;
//                 num++;
//             } else {
//                 star += "_"
//             }
//         }
//         l--
//         k++
//         star += "\n"
//     }
//     return star;
// }

// let star = prompt("input num","0");
// alert(draw(star));

//15 ข้อ
// //----ข้อ 1-------------------------------------------------------
// let count = () => {
//     let a = +prompt("a: ");
//     let b = +prompt("b: ");
//     let ans1, ans2;
//     let gcd = (a, b) => {
//         while (b) {
//             let temp = b;
//             b = a % b;
//             a = temp;
//         }
//         return a;
//     };
//     if (gcd(a, b)) {
//         ans1 = a / gcd(a, b);
//         ans2 = b / gcd(a, b);
//         console.log(`เศษส่วนอย่างต่ำ: ${ans1}/${ans2}`);
//     }
// }

// count();

//----ข้อ 2-------------------------------------------------------
// function cal() {
//     let num = 0;
//     for (let index = 160; index <= 2048; index += 2) {
//         num += index;
//     }
//     console.log(num)
// }
// cal();

//----ข้อ 3-------------------------------------------------------
// function cal() {
//     let num = 0;
//     for (let index = 163; index <= 815; index += 4) {
//         num += index;
//         console.log(index)
//     }
//     console.log(num)
// }
// cal();

//----ข้อ 4-------------------------------------------------------
function cal() {
    let num = prompt("input : ");
    let count = 0;
    for (let index = 0; index <= num; index ++) {
        num += index;
        console.log(index)
    }
    console.log(num)
}
cal();