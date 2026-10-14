let as = [1, 2, 3, 4, 5];

var bs = [0, 0, 0, 0, 0];

let i = 0;

for (item in as) {
    bs[i] = as[i] * 2;
    i += 1;
}