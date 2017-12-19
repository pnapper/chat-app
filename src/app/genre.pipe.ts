// import { Pipe, PipeTransform } from '@angular/core';
// import {Album} from './album.model';
//
// @Pipe({
//   name: 'genre'
// })
// export class GenrePipe implements PipeTransform {
//
//   transform(input: Album[], desiredGenre) {
//     var output: Album[] = [];
//     if (desiredGenre === "Rock") {
//       for (var i = 0; i < input.length; i++) {
//         if (input[i].genre === "Rock") {
//           output.push(input[i]);
//         }
//       }
//       return output;
//     } else if (desiredGenre === "Pop") {
//       for (var i = 0; i < input.length; i++) {
//         if (input[i].genre === "Pop") {
//           output.push(input[i]);
//         }
//       }
//       return output;
//     } else if (desiredGenre === "Electronic") {
//       for (var i = 0; i < input.length; i++) {
//         if (input[i].genre === "Electronic") {
//           output.push(input[i]);
//         }
//       }
//       return output;
//     } else if (desiredGenre === "Jazz") {
//       for (var i = 0; i < input.length; i++) {
//         if (input[i].genre === "Jazz") {
//           output.push(input[i]);
//         }
//       }
//       return output;
//     } else {
//       return input;
//     }
//   }
// }
